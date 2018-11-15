function storeQuestion(i){
    console.log("Storing Text Box");
    var texts = document.getElementsByClassName("textBox");
    var postText = texts[i];
    localStorage.setItem("postQuestionText", postText.value);
    var test = localStorage.getItem("postQuestionText");
    console.log(test);
    alert("Your question has been submitted");
}
function storeRecommendation(i) {
  console.log("Storing Text Box");
  var texts = document.getElementsByClassName("textBox");
  var postText = texts[i];
  localStorage.setItem("postRecommendationText", postText.value);
  var test = localStorage.getItem("postRecommendationText");
  console.log(test);
  alert("Your recommendation has been submitted");
}
function questionMessage() {
	alert("Your question has been submitted");
}
function recMessage() {
  alert("Your recommendation has been submitted");
}
