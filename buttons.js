const moreOrLess = () => {
    var dots = document.getElementById("dots");
    var readMore = document.getElementById("readMore");
    var readButton = document.getElementById("readButton");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readButton.innerHTML = "Read more";
        readMore.style.display = "none"
    } else {
        dots.style.display = "none";
        readButton.innerHTML = "Read less";
        readMore.style.display = "inline";
    }
}