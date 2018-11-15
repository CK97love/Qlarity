function postComment(i) {
    console.log("Storing Text Box");
    var texts = document.getElementsByClassName("replyBox");
    var commentText = texts[i];
    localStorage.setItem("commentText", commentText.value);
    var test = localStorage.getItem("commentText");
    console.log(test);
}