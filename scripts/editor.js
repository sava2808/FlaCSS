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
          {
            keytype:"transform",
            keystart:2,
            keyend:4,
            transform:"rotate",
            transformvalue:360,
            easing:"ease-in",
          },
        ], //keyframe list end
      }, //scene object end
      
    ], //scene object list end
  ], //scene list end
}
