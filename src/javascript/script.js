const valor = document.getElementById("value");
const botaoMais = document.getElementById("plus");
const botaoMenos = document.getElementById("minus");
const botaoReset = document.getElementById("reset");

const updateValue = () => {
    valor.innerHTML = count;
};

let count = 0;
let intervalId = 0;

botaoMais.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

botaoMenos.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

botaoReset.addEventListener('click', () => {
    count = 0;
    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId))