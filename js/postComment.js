function writeComment() {
    var commentText = localStorage.getItem("commentText");
    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    if(commentText) {
        //var div = document.getElementsByClassName("collapse");
        var div = document.getElementsByClassName("next-comment")[0];
        console.log(div);
        var divClone = div.cloneNode(true);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = commentText;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var collapse = document.getElementsByClassName("collapse")[0];
        var locationOfPost = collapse.querySelector("#postBody");
        locationOfPost.insertAdjacentElement('afterend', divClone);
        console.log(collapse.innerHTML); 

    }
}

writeComment();