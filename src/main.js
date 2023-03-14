import { ordenar, preencherModal, filtroProdutor, filtroDiretor,
 calculo} from "./data.js";

import data from "./data/ghibli/ghibli.json"

const ghibliInfo = data;


console.log(example, data);

const btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function(){
    window.scrollTo(0, 0);
});
