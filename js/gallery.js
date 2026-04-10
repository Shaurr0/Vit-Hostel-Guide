function dimImg(img) {
    img.style.opacity = "0.6";
}

function undimImg(img) {
    img.style.opacity = "1";
}

var galleryImgs = document.querySelectorAll(".imgbox img");
for (var i = 0; i < galleryImgs.length; i++) {
    galleryImgs[i].addEventListener("mouseover", function() {
        dimImg(this);
    });
    galleryImgs[i].addEventListener("mouseout", function() {
        undimImg(this);
    });
}

var facboxes = document.querySelectorAll(".facbox");
for (var i = 0; i < facboxes.length; i++) {
    var box = facboxes[i];
    var tip = box.querySelector(".factooltip");
    box.addEventListener("mouseover", function() {
        var t = this.querySelector(".factooltip");
        t.style.display = "block";
    });
    box.addEventListener("mouseout", function() {
        var t = this.querySelector(".factooltip");
        t.style.display = "none";
    });
}

var modal = document.getElementById("rulesModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
