//
// editor related stuff
//
editobj = { // properties of object being currently edited
  objx:0,
  objy:0,
  html:"",
}
editor = { //current things being edited
  scene:0,
  obj:0,
  keyframe:0,
}

function updateEditing(elem,type){ //update editing values of input
  switch (type) {
	  case "object":
	  eval("editobj." + elem.id + " = elem.value")
	  break
  }
}
function saveChanges() { //save editing changes
  for(key in editobj) {
	movie.scenes[editor.scene].objects[editor.obj][key] = editobj[key]
  }
}
function updateInfoMenu(){ //updates the infomenu (object&keyframe info) based on what's selected
  object = movie.scenes[editor.scene].objects[editor.obj]
  for(key in object){
	editobj[key] = object[key]
	document.getElementById(key).value = object[key]
  }
}