# Projeto Prático B2
- Repositorio destinado a atividade avaliativa do segundo bimestre da disciplina de Desenvolvimento Web
- Trabalho realizado por: Guilherme Campo Soares.
Professor responsável: Otavio Lube.

O trabalho prático tem como objetivo a otimização de um código desenvolvido pelo professor, que gera números aleatórios.

## Código fornecido para ser otimizado:
```javascript
function gerarAleatorios(quantidade){
  var vetor = [];
  var geracoes = [];

  while(vetor.length < quantidade){
    var aleatorio = Math.floor(Math.random()*60 + 1);
    geracoes.push(aleatorio);
    if(vetor.includes(aleatorio)){
      continue;
    }else{
      vetor.push(aleatorio);
    }
  }

  console.log("Gerações: ", geracoes);
  console.log("Finais: ", vetor);
}

function main(quantidade){
  console.time("timer");
  gerarAleatorios(quantidade);
  console.timeEnd("timer");
}
```

execução: `main(6)` quantidade padrão de números do jogos da Mega Sena.
Foram feitas 10 execuções do código, com os seguintes valores de tempo de execução:
- 0.43603515625 ms Gerações: 6
- 0.388916015625 ms Gerações: 6
- 0.392822265625 ms Gerações: 6
- 0.367919921875 ms Gerações: 7
- 0.363037109375 ms Gerações: 7
- 0.362060546875 ms Gerações: 6
- 0.35888671875 ms Gerações: 6
- 0.370849609375 ms Gerações: 6
- 0.358154296875 ms Gerações: 7
- 0.365966796875 ms Gerações: 6

- Média: 0.37646484375
- Desvio padrão: 0.0228430055427

Execução: `main(60)` quantidade máxima possível.
- 0.671875 ms Gerações: 181
- 0.6689453125 ms Gerações: 263
- 0.626953125 ms Gerações: 161
- 0.841064453125 ms Gerações: 443
- 0.718017578125 ms Gerações: 304
- 0.6630859375 ms Gerações: 276
- 0.64892578125 ms Gerações: 353
- 0.632080078125 ms Gerações: 264
- 0.618896484375 ms Gerações: 232
- 0.64111328125 ms Gerações: 313
- Média: 0.673095703125
- Desvio padrão: 0.0622144853327

# Solução Principal Encontrada:

```javascript
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

/* função main ser executada pela primeira vez acaba levando mais tempo, então ela por padrão será executada uma vez (com argumento quantidade = 0 para que passe o mais rápidamente possível pelo código), durante a criação das funções, para que posteriormente os usos úteis possam aproveitar da máxima eficiência. */
main(0);
```

## 0) Função gerarNumerosAleatorios(quantidade)
### 1) Inicialização
- 1.1) Cria um array vazio chamado `vetorNumerosGerados` que armazenará os números únicos;
- 1.2) Inicializa uma variável `i` com valor 0 que irá contar o número de iterações do Loop Principal;
### 2) Loop Principal
O loop `while` executa enquanto `i` for menor que a `quantidade` especificada:
```javascript
while (i < quantidade) {
    const aleatorio = Math.floor(Math.random() * 60 + 1);
```
- 2.1) Gera um número aleatório entre 1 e 60;
- 2.2) `Math.random()` gera um decimal entre 0 e 1;
- 2.3) Utilizando esse decimal (entre 0 e 1) gerado, ele é multiplicado por 60 para ter um número entre 0 e 59;
- 2.4) O resultado é somado 1 para ter um número entre 1 e 60;
- 2.5) `Math.floor()` arredonda o resultado para o número inteiro imediatamente abaixo;
### 3) Verificação de Duplicatas
```javascript
if (vetorNumerosGerados.includes(aleatorio)) {
    continue;
}
```
- 3.1) Verifica se o número gerado já existe no array;
- 3.2) Se existir, pula para próxima iteração com `continue` ;
- 3.3) Se não existir, adiciona o número ao array e incrementa o contador do contador;
### 4) Formatação da Saída
```javascript
const numerosComoString = vetorNumerosGerados.map(num => `${num}`).join(', ');
```
- 4.1) Converte cada número do array para string usando `map`
- 4.2) Une todos os números com vírgula e espaço usando `join(', ')`
### 5) Exibir e Retorno
- 5.1) Exibe no console os números gerados com sua quantidade
- 5.2) Retorna um objeto com:
  - `string`: números formatados como string
  - `quantidade`: total de números gerados

Execução: `main(6)` quantidade padrão de números do jogos da Mega Sena.
Foram feitas 10 execuções do código, com os seguintes valores de tempo de execução:
- 0.208984375 ms Gerações: 6
- 0.10302734375 ms Gerações: 6
- 0.22802734375 ms Gerações: 6
- 0.09399414062 ms Gerações: 6
- 0.116943359375 ms Gerações: 6
- 0.093994140625 ms Gerações: 6
- 0.08984375 ms Gerações: 6
- 0.092041015625 ms Gerações: 6
- 0.0888671875 ms Gerações: 6
- 0.10400390625 ms Gerações: 6

- Média: 0.12158203125
- Desvio padrão: 0.0493434718428

Execução: `main(60)` quantidade máxima de números do jogos da Mega Sena.
Foram feitas 10 execuções do código, com os seguintes valores de tempo de execução:
- 0.208984375 ms Gerações: 6
- 0.10302734375 ms Gerações: 6
- 0.22802734375 ms Gerações: 6
- 0.09399414062 ms Gerações: 6
- 0.116943359375 ms Gerações: 6
- 0.093994140625 ms Gerações: 6
- 0.08984375 ms Gerações: 6
- 0.092041015625 ms Gerações: 6
- 0.0888671875 ms Gerações: 6
- 0.10400390625 ms Gerações: 6

- Média: 0.12158203125
- Desvio padrão: 0.0493434718428

## Calculo de diferença percentual no tempo de execução de ambos os códigos

## Conclusão
Este código é uma implementação mais robusta em relação ao código apresentado pela sugestão do professor, pois:
- Evita números duplicados, dessa forma economizando recursos computacionais, aumentando a velocidade de execução do código, bem como contribuindo para a prática da "computação verde" através do aumento da eficiência do código implicar em um menor impacto no meio ambiente;
- O código é formatado de maneira legível, mesmo que seja utilizadas strings na exibição dos resultados, a formatação é simples, direta. Além disso, o retorno apresenta tanto os números quanto a quantidade, através da formatação utilizando `map` e `join` .
- Permite gerar qualquer quantidade de números únicos.
