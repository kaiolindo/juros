// Esta linha seleciona o elemento HTML com ID 'calculate' e adiciona um ouvinte de evento de clique (click).
document.getElementById('calculate').addEventListener('click', function(){

    // esta linha obtém o valor digitado no elemento  HTML com ID 'value' e armazena na variável 'value'.
    const value = document.getElementById('value').value;

    // Esta linha obtém o valor digitado no elemento HTML com ID 'fee' e o divide por 100 para obter uma taxa em decimal.
    //O resultado é armazenado na variável 'fee'. 
    const fee = (document.getElementById('fee').value) / 100;

    // Esta linha obtém o valor digitado no elemento HTML com ID 'time e armazena na variável 'time'.
    const time = document.getElementById('time').value
    
    // Esta linha calcula o total com base nos valores obtidos anteriormente. O cálculo é realizado usando a
    //fórmula de juros compostos. 
    const total = value * (1 + fee)**time;
    
    //Esta linha atualiza o contéudo do elemento HTML com ID 'total' para mostrar o resultado formatado
    //como uma string no formato "R$ x,xx".
    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});