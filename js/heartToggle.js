function changeImage(e, i) {
    x = document.getElementsByClassName("heartCount");
    console.log(x);
    console.log(x[i].innerHTML[[0]]);
    var numLikes = parseInt(x[i].innerHTML[0], 10);
    if(e.getAttribute('src') == 'images/heart.png') {
        e.setAttribute('src', 'images/heartfilled.png');
        e.setAttribute('height', '15px');
        e.setAttribute('width', '15px');
        numLikes = numLikes + 1;
        x[i].innerHTML = numLikes + " Likes";
    } else {
        e.setAttribute('src', 'images/heart.png');
        e.setAttribute('height', '20px');
        e.setAttribute('width', '20px');
        numLikes = numLikes - 1;
        x[i].innerHTML = numLikes + " Likes";
    }
}
