function appendPost() {
    var content = localStorage.getItem("postQuestionText");
    var recommendation = localStorage.getItem("postRecommendationText");
    var hashtags = JSON.parse(localStorage.getItem("hashtags"));
    var allHashtagsQuestion = "";
    var allHashtagsRecommendation = "";
    var d = new Date();

    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    if(content) {
        var div = document.getElementsByClassName("question")[2];
        var divClone = div.cloneNode(true);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = content;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var changeLikeCount = divClone.querySelector('.heartCount');
        changeLikeCount.innerHTML = "0 Likes";

        var changeHashtag = divClone.querySelector('#hashtag');
        for(i = 1; i < hashtags.length; i++) {
            if(hashtags[i]) {
                allHashtagsQuestion += hashtags[i];
            }
        }
        changeHashtag.innerHTML = allHashtagsQuestion;

        var questionTab = document.getElementById("questionTab");
        questionTab.appendChild(document.createElement("br"));
        questionTab.appendChild(divClone);
    }

    if(recommendation) {
        var div = document.getElementsByClassName("question")[2];
        var divClone = div.cloneNode(true);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = recommendation;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var changeLikeCount = divClone.querySelector('.heartCount');
        changeLikeCount.innerHTML = "0 Likes";

        var changeHashtag = divClone.querySelector('#hashtag');
        for(i = 1; i < hashtags.length; i++) {
            if(hashtags[i]) {
                allHashtagsRecommendation += hashtags[i];
            }
        }
        changeHashtag.innerHTML = allHashtagsRecommendation;

        var questionTab = document.getElementById("recommendationTab");
        questionTab.appendChild(document.createElement("br"));
        questionTab.appendChild(divClone);
    }

}

appendPost();