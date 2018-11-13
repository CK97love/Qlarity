function store(){
    console.log("Storing Username")
    var postText = document.getElementById("postText");
    localStorage.setItem("postText", postText.value);
    console.log(postText);
    window.alert("Worked!");
}
function questionMessage() {
	alert("Your question has been submitted");
}
function recMessage() {
  alert("Your recommendation has been submitted");
}
