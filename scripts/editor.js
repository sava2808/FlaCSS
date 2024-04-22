movie = {
  title: "FlaCSS Movie",
  description: "Default Template",
  scenes: [ //scene list
    [ //scene object list
      { //scene object
        html:"<span style='font-size:24px'>Welcome to FlaCSS</span>", //html inside object 
        objx:100, //object x position
        objy:100, //object y position (0,0 = top left)
        objstart:1, //object spawn time
        keyframes:[ //keyframe list
          { //keyframe
            keytype:"transform",
            keystart:2,
            keyend:4,
            
            transform:"translate",
            transformvalue:[200,200], //movement is relative 
            easing:"ease-in",
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
