const entrada = document.querySelector('#entrada');
const resultado = document.querySelector('#resultado');
const conversao = document.querySelector('#conversao');
const result = document.querySelector('#result');



document.addEventListener('click', e => {
    const el = e.target;
    let txtDec;


    // capturando a entrada de dados
    // 0x, 0b e 0 fazem a engine interpretar a string como base diferente de 10
    if (conversao.value === 'decimal') txtDec = entrada.value;
    else if (conversao.value === 'binario') txtDec = '0b' + entrada.value;
    else if (conversao.value === 'hexa') txtDec = '0x' + entrada.value;
    else if (conversao.value === 'octal') txtDec = Number.parseInt(entrada.value, 8); // parseInt analisa a string e retorna na base especificada


    // convertendo
    if (el.classList.contains('btn-conv')) {
        if (resultado.value === 'decimal') result.value = Number(txtDec).toString(10);
        else if (resultado.value === 'binario') result.value = Number(txtDec).toString(2);
        else if (resultado.value === 'hexa') result.value = Number(txtDec).toString(16);
        else if (resultado.value === 'octal') result.value = Number(txtDec).toString(8);
    }


    if (el.classList.contains('btn-limpar')) {
        entrada.value = '';
        result.value = '';
    }
});
