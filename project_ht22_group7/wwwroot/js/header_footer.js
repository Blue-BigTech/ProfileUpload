// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    document.getElementById("search-input").classList.toggle("show-input");
    var x = window.matchMedia("(min-width: 768px)");
    if (!x.matches) {
        document.getElementById("header-title").classList.toggle("hide-header");
    }
});

window.onclick = function (event) {
    var searchBox = document.getElementById("search-box");
    if (!searchBox.contains(event.target)) {
        var searchInput = document.getElementById("search-input");
        if (searchInput.classList.contains('show-input')) {
            searchInput.classList.remove('show-input');
        }
        var header = document.getElementById("header-title");
        if (header.classList.contains('hide-header')) {
            header.classList.remove('hide-header');
        }
    }
}