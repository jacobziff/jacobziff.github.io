heading = document.body.querySelector("h1");
isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

window.addEventListener("load", async function() {
    if (!isReduced) {
        n = 150;
        heading.innerHTML = "_";
        str = "Jacob Ziff"

        for (i = 0; i < str.length - 1; ++i) {
            await delay(n);
            partial = str.slice(0, i + 1);
            heading.innerHTML = partial.concat("_");
        }

        await delay(n);
        heading.innerHTML = str;
    }
});