var maincolorneutral = "#4e9ac1";
var maintextcolor = "#E0E0E0";

var textarea = document.querySelector("textarea");
var [text, email, tel] = document.querySelectorAll(".shortinput");
var formElements = [text, email, tel, textarea];

formElements.forEach(function (elt) {elt.addEventListener("focus", function () {
    if (this.value === this.defaultValue) {
        this.value = '';
        this.style.color = maincolorneutral;
    }
})});

formElements.forEach(function (elt) {elt.addEventListener("blur", function () {
    if (this.value === '' || this.value === this.defaultValue) {
        this.value = this.defaultValue;
        this.style.color = maintextcolor;
    }
})});

var send = document.body.querySelector("button");
var form = document.body.querySelector("form");
var response = document.body.querySelector("#formvalidation");

window.addEventListener("load", function () {
    [text, email, tel, textarea, send].forEach(function (elt) {
        elt.value = elt.defaultValue;
    })
});

send.addEventListener("click", function () {
    good = true

    if (text.value === text.defaultValue) {
        good = false;
        message = "Please enter your name."
    }

    if (good && (email.value === email.defaultValue || !email.checkValidity())) {
        good = false;
        message = "Please enter a valid email address."
    }

    if (good && (tel.value !== tel.defaultValue) && (!tel.checkValidity())) {
        good = false;
        message = "Please enter a valid phone number."
    }

    if (good && (textarea.value === textarea.defaultValue)) {
        good = false;
        message = "Please enter your message."
    }

    if (good) {
        form.submit();
        alert("Successfully Submitted!");
        [text, email, tel, textarea, send].forEach(function (elt) {
            elt.value = elt.defaultValue;
            elt.style.color = maintextcolor;
        })
        response.innerHTML = "";
    } else {
        response.innerHTML = message
    }
});
