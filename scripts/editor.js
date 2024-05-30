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
templateobj = { //default flacss square
	html:"<img src='images/flacss_logo.png'>",
	objx:0,objy:0,
	objstart:1,objend:3,
	keyframes:[{keystart:1,keyend:3,keytype:"transform",transform:"rotate",keyvalue:360,easing:"linear"}]
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
	editor.obj = Math.min(Math.max(editor.obj,0),movie.scenes[editor.scene].objects.length - 1)
	document.getElementById("objindex").value = editor.obj
	object = movie.scenes[editor.scene].objects[editor.obj]
	for(key in object){
		editobj[key] = object[key]
		document.getElementById(key).value = object[key]
	}
}
function createThing(thing) { //create a new keyframe/object/scene, handle dropdown
	switch (thing) {
		case "dropdown":
		drop = document.getElementsByClassName("create-details")[0]
		if (drop.getAttribute("closed") == undefined) {
			drop.setAttribute("closed","")
		} else {
			drop.removeAttribute("closed")
		}
		break
		case "object":
		movie.scenes[editor.scene].objects.push(structuredClone(templateobj))
		editor.obj = movie.scenes[editor.scene].objects.length - 1
		updateInfoMenu()
		break
	}
}