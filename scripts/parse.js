//
// stuff related to creating the preview from movie data
//
movietemplate = { // the (default) 'movie' to convert and play back 
  title: "FlaCSS Movie",
  description: "Default Template",
  scenes: [ //scene list
    { //scene
      objects: [ //scene object list
	    { //object
			html:"<span style='font-size:24px'>Welcome to FlaCSS</span>", //html inside object 
			objx:100, //object starting x position
			objy:100, //object starting y position (0,0 = top left)
			objstart:1, //object spawn time (seconds)
			keyframes:[ //keyframe list
			  { //keyframe
				keytype:"transform",
				keystart:2, //keyframe start time (seconds)
				keyend:4, //keyframe end time (seconds)
				
				transform:"translate",
				transformvalue:[200,200], //translation is relative 
				easing:"ease-in", //css animation easing functions
			  }, //keyframe end
			  /*{ 
				keytype:"fade",
				keystart:2,
				keyend:4,
				fadedir:1, //1 = fade in; 0 = fade out
				easing:"ease-in",
			  },*/ //this doesn't work, the cohost go animations (https://cohost.org/blep/post/5112453--)
				   //cant have their transform changed by css :( 
				   //if someone can fix this lemme know 
			], //keyframe list end
			
		}, //object end
      ], //scene object list end
      
    }, //scene end
  ], //scene list end
}
movie = {
  title: "TestMovie",
  description: "Test",
  scenes:[
	{
		objects:[{html:"<img src='images/flacss_logo.png'>",objx:0,objy:0,}]
	}
  ]
}
function createPreview() { //create projector preview 
  proj = document.getElementsByClassName("projector")[0]
  proj.innerHTML = "" //reset
  for (scene of movie.scenes) {
	  for (object of scene.objects) {
		  obj = document.createElement("div")
		  obj.innerHTML = object.html
		  obj.style = `position:absolute;left:${object.objx}px;top:${object.objy}px` // i keep confusing top with up lol
		  proj.appendChild(obj)
	  }
  }
}