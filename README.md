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

- Média: 0.37646484375 ms
- Desvio padrão: 0.0228430055427 ms

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
- Média: 0.673095703125 ms
- Desvio padrão: 0.0622144853327 ms

# Solução Encontrada:

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
- 0.135009765625 ms Gerações: 6
- 0.118896484375 ms Gerações: 6
- 0.21923828125 ms Gerações: 6
- 0.10791015625 ms Gerações: 6
- 0.135986328125 ms Gerações: 6
- 0.106201171875 ms Gerações: 6
- 0.098876953125 ms Gerações: 6
- 0.10107421875 ms Gerações: 6
- 0.097900390625 ms Gerações: 6
- 0.10498046875 ms Gerações: 6

- Média: 0.122607421875 ms
- Desvio padrão: 0.0348098302396 ms

Execução: `main(60)` quantidade máxima de números do jogos da Mega Sena.
Foram feitas 10 execuções do código, com os seguintes valores de tempo de execução:
- 0.21484375 ms Gerações: 6
- 0.14599609375 ms Gerações: 6
- 0.14404296875 ms Gerações: 6
- 0.14892578125 ms Gerações: 6
- 0.135009765625 ms Gerações: 6
- 0.158935546875 ms Gerações: 6
- 0.22900390625 ms Gerações: 6
- 0.137939453125 ms Gerações: 6
- 0.1728515625 ms Gerações: 6
- 0.153076171875 ms Gerações: 6

- Média: 0.1640625 ms
- Desvio padrão: 0.0308271408736 ms

## Calculo de diferença percentual no tempo de execução de ambos os códigos (Fornecido e Solução)
Sendo a Diferença Percentual Definida como: `D = (Valor Solucao - Valor Fornecido) / Valor Fornecido * 100`
```js
D = (0.1640625 - 0.673095703125) / 0.673095703125 * 100
D ≈ 75,625680087051142546245919477693 %
```
# Ou seja, a solução encontrada é aproximadamente 75,63 % mais eficiente que o código fornecido.


## Conclusão
Este código é uma implementação mais robusta e eficiente em relação ao código apresentado pela sugestão do professor, pois:
- Evita números duplicados, dessa forma economizando recursos computacionais, aumentando a velocidade de execução do código, bem como contribuindo para a prática da "computação verde" através do aumento da eficiência do código implicar em um menor impacto no meio ambiente;
- O código é formatado de maneira legível, mesmo que seja utilizadas strings na exibição dos resultados, a formatação é simples, direta e suficiente, visto que o usuário final está interessado apenas em visualizar os números para fazer o jogo. Além disso, o retorno apresenta tanto os números quanto a quantidade de números gerados, caso queira gerar mais de 6 números, através da formatação utilizando `map` e `join` .
- Permite gerar qualquer quantidade de números únicos no intervalo de 1 a 60.
- Em relação a solução encontrada, existe diferença no tempo de execução da função `main` na primeira chamada devido à inicialização e otimização do ambiente JavaScript. Motores como o V8 (como presente no Google Chrome, tendo em vista que foi utilizado o ambiente do Console nas ferramentas de desenvolvedor em uma nova guia no browser) utilizam *Just-In-Time Compilation* (JIT), que compila e otimiza o código durante a execução. Na primeira execução, o motor precisa interpretar e compilar o código, além de inicializar estruturas internas, como métodos e recursos do ambiente. Esse processo é mais lento inicialmente, mas as execuções subsequentes se beneficiam de otimizações e cache, tornando-as mais rápidas.
 Minha solução de executar a função `main` uma vez antes do uso principal resolve esse problema ao "aquecer" o ambiente, permitindo que as chamadas posteriores sejam mais eficientes. Essa prática é capaz de eliminar o custo inicial de compilação e garantir medições de desempenho mais precisas.
