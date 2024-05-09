var maincolorvibrant = "#00a1ff";

var home = document.body.querySelector("#mainlink");
var about = document.body.querySelector("#aboutlink");
var exp = document.body.querySelector("#explink");
var proj = document.body.querySelector("#projlink");
var contact = document.body.querySelector("#contactlink");
var sec1 = document.body.querySelector(".sidebar");
var sec2 = document.body.querySelector("#about");
var sec3 = document.body.querySelector("#experience");
var sec4 = document.body.querySelector("#projects");
var sec5 = document.body.querySelector("#contact");
var oldcol = about.style.color
var newcol = maincolorvibrant;
var sidebaroffset = 0;

function nonbold () {
    home.style.fontWeight = 500;
    about.style.fontWeight = 500;
    exp.style.fontWeight = 500;
    proj.style.fontWeight = 500;
    contact.style.fontWeight = 500;
    home.style.color = oldcol;
    about.style.color = oldcol;
    exp.style.color = oldcol;
    proj.style.color = oldcol;
    contact.style.color = oldcol;
}

update = function () {
    var y = window.scrollY;
    var top1 = sidebaroffset;
    if (window.innerWidth < 800) {
        top1 = sec1.clientHeight - 200;
    }
    var top2 = sec2.clientHeight + top1;
    var top3 = sec3.clientHeight + top2;
    var top4 = sec4.clientHeight + top3;
    var top5 = sec5.clientHeight + top4;
    nonbold();
    if (y < top1) {
        home.style.fontWeight = 800;
        home.style.color = newcol;
    } else if (y < top2) {
        about.style.fontWeight = 800;
        about.style.color = newcol;
    } else if (y < top3) {
        exp.style.fontWeight = 800;
        exp.style.color = newcol;
    } else if (y < top4) {
        proj.style.fontWeight = 800;
        proj.style.color = newcol;
    } else if (y < (top5 + 10000)) {
        contact.style.fontWeight = 800;
        contact.style.color = newcol;
    }
}

window.addEventListener('load', update);

document.addEventListener('scroll', update);

window.addEventListener('resize', update);