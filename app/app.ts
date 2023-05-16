import { NegociacaoControler } from "./controllers/negociacao-controler.js";

const controller = new NegociacaoControler();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Não foi possivel inicializar a aplicação. Verifique se o form existe.")
}

