function changeImage(e, num, i) {
    x = document.getElementsByClassName("heartCount");
    console.log(x);
    if(e.getAttribute('src') == 'images/heart.png') {
        e.setAttribute('src', 'images/heartfilled.png');
        e.setAttribute('height', '15px');
        e.setAttribute('width', '15px');
        num = num + 1;
        x[i].innerHTML = num + " Likes";
    } else {
        e.setAttribute('src', 'images/heart.png');
        e.setAttribute('height', '20px');
        e.setAttribute('width', '20px');
        num = num;
        x[i].innerHTML = num + " Likes";
    }
}


