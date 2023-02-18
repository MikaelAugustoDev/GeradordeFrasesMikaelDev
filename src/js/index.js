const button = document.getElementById('button');

addEventListener ('click', function () {
    mostrarConselhoAleatorio()
})

async function conselhoAleatorio() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}


async function mostrarConselhoAleatorio() {
    const conselhos = await conselhoAleatorio()
    const conselho = conselhos.slip.advice
    document.getElementById('conselho').innerHTML = conselho
};

mostrarConselhoAleatorio()