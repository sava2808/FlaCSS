movie = { // the 'movie' to convert and play back
  title: "FlaCSS Movie",
  description: "Default Template",
  scenes: [ //scene list
    [ //scene object list
      { //scene object
        html:"<span style='font-size:24px'>Welcome to FlaCSS</span>", //html inside object 
        objx:100, //object x position
        objy:100, //object y position (0,0 = top left)
        objstart:1, //object spawn time (seconds)
        keyframes:[ //keyframe list
          { //keyframe
            keytype:"transform",
            keystart:2, //keyframe start time (seconds)
            keyend:4, //keyframe end time (seconds)
            
            transform:"translate",
            transformvalue:[200,200], //translation is relative 
            easing:"ease-in", //built in css animation easing functions
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
      }, //scene object end
      
    ], //scene object list end
  ], //scene list end
}
template = `<div style="display:flex;justify-content:center">
<div style='width:390px;height:390px;background-color:white;overflow:hidden;'>
</div>
</div>`
function createPreview() {
  getElementById("projector").innerHTML = "<div style='position:absolute;left:0;up:0;'><img src='images/flacss_logo.png'></div>"
}
