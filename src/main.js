import data from "./data/ghibli/ghibli.js"

const ghibliInfo = data;
console.log (ghibliInfo.films[0].description);




console.log(example, data);

const btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function(){
    window.scrollTo(0, 0);
});
