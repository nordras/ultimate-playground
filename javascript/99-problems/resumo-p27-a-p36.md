# Resumo das Implementacoes (p27 a p36)

## p27 - group
Implementa agrupamento de elementos em subconjuntos disjuntos com tamanhos definidos.

- Entrada: lista de tamanhos e lista de elementos.
- Saida: todas as combinacoes validas de grupos.
- Regra importante: a soma dos tamanhos precisa ser igual ao tamanho da lista.

## p28 - lsort
Ordena uma lista de listas pelo tamanho de cada sublista.

- Entrada: array de arrays.
- Saida: novo array ordenado por comprimento (crescente).

## p29 - lfsort
Ordena uma lista de listas pela frequencia dos tamanhos.

- Entrada: array de arrays.
- Saida: sublistas com comprimentos mais raros aparecem primeiro.
- Desempate: pelo tamanho da sublista.

## p30 - isPrime
Verifica se um numero inteiro e primo.

- Entrada: inteiro.
- Saida: true ou false.
- Estrategia: testa divisores ate a raiz quadrada do numero.

## p31 - gcd
Calcula o maximo divisor comum de dois inteiros usando algoritmo de Euclides.

- Entrada: dois inteiros.
- Saida: MDC positivo.
- Observacao: usa valor absoluto para normalizar sinais.

## p32 - coprime
Verifica se dois numeros sao coprimos.

- Entrada: dois inteiros.
- Saida: true quando MDC e igual a 1.
- Base: reutiliza a logica de MDC.

## p33 - totient
Calcula a funcao totiente de Euler de forma direta.

- Entrada: inteiro positivo n.
- Saida: quantidade de numeros entre 1 e n-1 que sao coprimos com n.
- Estrategia: contagem por verificacao de coprimalidade.

## p34 - primeFactors
Decompoe um numero em fatores primos.

- Entrada: inteiro maior que 1.
- Saida: lista de fatores primos com repeticao.
- Exemplo: 315 -> [3, 3, 5, 7].

## p35 - primeFactorsMult
Retorna fatores primos com multiplicidade.

- Entrada: inteiro maior que 1.
- Saida: pares no formato [primo, expoente].
- Exemplo: 315 -> [[3, 2], [5, 1], [7, 1]].

## p36 - phi
Calcula a funcao totiente de Euler de forma otimizada.

- Entrada: inteiro positivo n.
- Saida: valor de phi(n).
- Estrategia: aplica formula multiplicativa usando fatoracao prima.
- Formula: phi(n) = produto de (p - 1) * p^(m - 1), para cada primo p com multiplicidade m.

## Extras executados no fluxo
- Foram feitos 10 commits atomicos, um por problema, com mensagens p27 ate p36.
- Foi realizado push para o remoto no branch main.
- Foi executado um smoke test em Node para validar carregamento e comportamento basico das funcoes.
