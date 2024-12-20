function gerarNumerosAleatorios(quantidade) {
    // Trabalhando manipulando os dados dentro de array
    const vetorNumerosGerados = [];

    let i = 0;
    while (i < quantidade) {
        const aleatorio = Math.floor(Math.random() * 60 + 1);

        // Evitar duplicatas
        if (vetorNumerosGerados.includes(aleatorio)) {
            continue;
        }

        vetorNumerosGerados[i] = aleatorio;
        i++;
    }
    
    // Transformando o array em uma string concatenada, adicionando colchetes
    const numerosComoString = vetorNumerosGerados.map(num => `${num}`).join(', ');

    // Exibindo a string concatenada no console com contador da quantidade de números que serão gerados
    console.log(`Números gerados: (${vetorNumerosGerados.length}): [${numerosComoString}]`);

    // Retornando tanto a string concatenada, quanto o tamanho do array que é igual a quantidade de números na string.
    return { string: numerosComoString, quantidade: vetorNumerosGerados.length };
}

function main(quantidade){
    console.time("timer");
    gerarNumerosAleatorios(quantidade);
    console.timeEnd("timer")
}

main(0);
/* função main ser executada pela primeira vez acaba levando mais tempo, 
então ela por padrão será executada uma vez (com argumento quantidade = 0 para que passe o mais rápidamente possível pelo código), 
durante a criação das funções, para que posteriormente os usos úteis possam aproveitar da máxima eficiência. */
