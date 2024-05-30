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
			objstart:1, //object spawning time (seconds)
			objend:6, //object despawning time (seconds)
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
		objects:[structuredClone(templateobj)]
	}
	]
}
// function sortKeys(a,b){
	// tr_priority = {translate:1,translate3d:1,rotate:2,rotate3d:2,scale:3} //priority list, high = deeper animation
	// if (a.keytype == "transform") {
		// an = tr_priority[a.transform]
	// }
	// if (b.keytype == "transform") {
		// bn = tr_priority[b.transform]
	// }
	//return (bn - an)
// }
function createPreview() { //create projector preview
	saveChanges()
	proj = document.getElementsByClassName("projector")[0]
	proj.innerHTML = "" //reset
	for (scene of movie.scenes) {
		for (object of scene.objects) {
			//keylayers = []
			//keysort = object.keyframes
			//keysort.sort(sortKeys)
			obj = document.createElement("div")
			obj.innerHTML = object.html
			obj.style = `position:absolute;left:${object.objx}px;top:${object.objy}px;transform:rotatex(90deg);animation:${object.objend - object.objstart}s step-start ${object.objstart}s spin reverse` //animation makes object disappear while not in the spawn time
			// for (let i=0;i<keylayers.length-1;i++) {
				// keylayers[i+1].appendChild(keylayers[i]) //layer keyframes on object
			// }
			// keylayers.at(-1).appendChild(obj) //why must i use .at instead of [] 
			// proj.appendChild(keylayers.at(-1))
			proj.appendChild(obj)
		}
	}
}