/*
    Hey, you're peeking inside my website!
    All work in this file is my own.

    Created by Jacob Ziff in 2024.
    Originally a final project for SI 339 at the University of Michigan,
    later repurposed into a personal website with gradual additions.
*/
var maincolorvibrant = "#00a1ff";
var secondarybgcolor = "#1E1B18";

var sidebar = document.body.querySelector(".sidebar");

var navbar = document.body.querySelector(".navbar");

var header  = document.body.querySelector("header");

var footermain = document.body.querySelector(".inbetweenfooterlink")

var breakpoint = 800;

window.addEventListener("load", function () {
    if (this.window.innerWidth < breakpoint) {
        navbar.style.position = "fixed";
        navbar.style.background = secondarybgcolor;
        navbar.style.border = "solid 2px " + maincolorvibrant;
        navbar.style.borderRadius = "7px";
        navbar.style.padding = "10px 5px";
        header.style.paddingTop = "130px";
        footermain.innerHTML = " | ";
    } else {
        navbar.style.position = "static";
        navbar.style.background = "";
        navbar.style.border = ""
        header.style.paddingTop = "0px";
        footermain.innerHTML = "";
    }
});

window.addEventListener("resize", function () {
    if (this.window.innerWidth < breakpoint) {
        navbar.style.position = "fixed";
        navbar.style.background = secondarybgcolor;
        navbar.style.border = "solid 2px " + maincolorvibrant;
        navbar.style.borderRadius = "7px";
        navbar.style.padding = "10px 5px";
        header.style.paddingTop = "130px";
        footermain.innerHTML = " | ";
    } else {
        navbar.style.position = "static";
        navbar.style.background = "";
        navbar.style.border = "";
        header.style.paddingTop = "0px";
        footermain.innerHTML = "";
    }
});

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

var offset = -100
document.querySelectorAll(".sidelink").forEach(function (elt) {elt.addEventListener("click", async function () {
    if (window.innerWidth < breakpoint) {
        await delay(10);
        if (this.id != "mainlink") {
            window.scrollBy(0, offset);
        } else {
            window.scrollTo(0, 0);
        }
    }
})});

document.querySelector(".skip-to-main").addEventListener("click", async function () {
    if (window.innerWidth < breakpoint) {
        await delay(10);
        window.scrollBy(0, offset);
    }
})