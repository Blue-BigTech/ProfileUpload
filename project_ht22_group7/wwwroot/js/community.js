var addpost = document.getElementsByClassName("collaps");

if (addpost.length > 0) {
    addpost[0].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else { content.style.display = "block"; }
    });
}



var drop = document.getElementById("drop-button");

drop.addEventListener("click", () => {
    document.getElementById("communites").classList.toggle("show");
});

fetchImages();
window.addEventListener("resize", fetchImages);
var screenType = null;

function fetchImages() {
    var images = document.querySelectorAll('[data-img]');
    var web = window.matchMedia("(min-width: 1024px)");
    var tablet = window.matchMedia("(min-width: 768px)");

    for (var i = 0; i < images.length; i++) {
        if (web.matches) {
            if (screenType === "Web")
                return;
            console.log("Web");
            screenType = "Web";
            images[i].src = images[i].getAttribute('data-gameID');
        }
        else if (tablet.matches) {
            if (screenType === "Tablet")
                return;
            console.log("Tablet");
            screenType = "Tablet";
            images[i].src = images[i].getAttribute('data-gameID');
        }
        else {
            if (screenType === "Mobile")
                return;
            console.log("Mobile");
            screenType = "Mobile";
            images[i].src = images[i].getAttribute('data-gameID');
        }
    }
}