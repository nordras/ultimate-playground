# Explicacao linha a linha - Doubly Linked List

Este documento explica, linha por linha, os arquivos da pasta `doubly-linked-list`.

## 1) `doublyLinkedList.js`

### Bloco 1: No da lista

- **Linha 1**: `class DoublyLinkedListNode {`
  Define a classe de no usada pela lista duplamente encadeada.
- **Linha 2**: `constructor(value) {`
  Inicia o construtor do no, recebendo o valor do no.
- **Linha 3**: `this.value = value;`
  Armazena o dado no campo `value`.
- **Linha 4**: `this.next = null;`
  Inicializa o ponteiro para o proximo no como `null`.
- **Linha 5**: `this.prev = null;`
  Inicializa o ponteiro para o no anterior como `null`.
- **Linha 6**: `}`
  Fecha o construtor.
- **Linha 7**: `}`
  Fecha a classe do no.

### Bloco 2: Classe principal

- **Linha 9**: `class DoublyLinkedList {`
  Define a estrutura principal da lista.
- **Linha 10**: `constructor() {`
  Construtor da lista.
- **Linha 11**: `this.head = null;`
  Inicio da lista (cabeca), inicialmente vazio.
- **Linha 12**: `this.tail = null;`
  Fim da lista (cauda), inicialmente vazio.
- **Linha 13**: `this.length = 0;`
  Contador de tamanho da lista.
- **Linha 14**: `}`
  Fecha o construtor.

### Metodo `isEmpty`

- **Linha 16**: `isEmpty() {`
  Declara metodo para verificar se a lista esta vazia.
- **Linha 17**: `return this.length === 0;`
  Retorna `true` quando o tamanho e zero.
- **Linha 18**: `}`
  Fecha o metodo.

### Metodo `append`

- **Linha 20**: `append(value) {`
  Adiciona no no final.
- **Linha 21**: `const node = new DoublyLinkedListNode(value);`
  Cria um novo no com o valor recebido.
- **Linha 23**: `if (!this.head) {`
  Caso especial: lista vazia.
- **Linha 24**: `this.head = node;`
  Cabeca passa a ser o novo no.
- **Linha 25**: `this.tail = node;`
  Cauda tambem passa a ser o novo no.
- **Linha 26**: `this.length += 1;`
  Incrementa tamanho.
- **Linha 27**: `return this;`
  Retorna a lista para permitir encadeamento.
- **Linha 28**: `}`
  Fim do caso de lista vazia.
- **Linha 30**: `node.prev = this.tail;`
  Novo no aponta para a cauda atual como anterior.
- **Linha 31**: `this.tail.next = node;`
  A cauda atual aponta para o novo no como proximo.
- **Linha 32**: `this.tail = node;`
  Atualiza a cauda para o novo no.
- **Linha 33**: `this.length += 1;`
  Incrementa tamanho.
- **Linha 35**: `return this;`
  Retorna a lista.
- **Linha 36**: `}`
  Fecha o metodo.

### Metodo `prepend`

- **Linha 38**: `prepend(value) {`
  Adiciona no no inicio.
- **Linha 39**: `const node = new DoublyLinkedListNode(value);`
  Cria novo no.
- **Linha 41**: `if (!this.head) {`
  Caso especial: lista vazia.
- **Linha 42**: `this.head = node;`
  Define cabeca.
- **Linha 43**: `this.tail = node;`
  Define cauda.
- **Linha 44**: `this.length += 1;`
  Incrementa tamanho.
- **Linha 45**: `return this;`
  Retorna lista.
- **Linha 46**: `}`
  Fim do caso vazio.
- **Linha 48**: `node.next = this.head;`
  Novo no aponta para a cabeca antiga como proximo.
- **Linha 49**: `this.head.prev = node;`
  Cabeca antiga aponta para novo no como anterior.
- **Linha 50**: `this.head = node;`
  Atualiza cabeca.
- **Linha 51**: `this.length += 1;`
  Incrementa tamanho.
- **Linha 53**: `return this;`
  Retorna lista.
- **Linha 54**: `}`
  Fecha o metodo.

### Metodo `find`

- **Linha 56**: `find(value) {`
  Busca um no pelo valor.
- **Linha 57**: `let current = this.head;`
  Comeca da cabeca.
- **Linha 59**: `while (current) {`
  Percorre enquanto houver no.
- **Linha 60**: `if (current.value === value) {`
  Compara valor do no atual.
- **Linha 61**: `return current;`
  Retorna o no encontrado.
- **Linha 62**: `}`
  Fecha condicional.
- **Linha 64**: `current = current.next;`
  Avanca para o proximo no.
- **Linha 65**: `}`
  Fecha loop.
- **Linha 67**: `return null;`
  Retorna `null` se nao encontrar.
- **Linha 68**: `}`
  Fecha metodo.

### Metodo `insertAfter`

- **Linha 70**: `insertAfter(targetValue, newValue) {`
  Insere um novo valor apos outro valor alvo.
- **Linha 71**: `const targetNode = this.find(targetValue);`
  Busca no alvo.
- **Linha 73**: `if (!targetNode) {`
  Se nao existe alvo...
- **Linha 74**: `return false;`
  ...falha a insercao.
- **Linha 75**: `}`
  Fecha condicional.
- **Linha 77**: `const newNode = new DoublyLinkedListNode(newValue);`
  Cria novo no.
- **Linha 78**: `const nextNode = targetNode.next;`
  Guarda referencia para o no que vinha depois do alvo.
- **Linha 80**: `newNode.prev = targetNode;`
  Novo no aponta para alvo como anterior.
- **Linha 81**: `newNode.next = nextNode;`
  Novo no aponta para o antigo proximo.
- **Linha 82**: `targetNode.next = newNode;`
  Alvo passa a apontar para o novo no.
- **Linha 84**: `if (nextNode) {`
  Se havia no depois do alvo...
- **Linha 85**: `nextNode.prev = newNode;`
  ...ajusta ponteiro de volta desse no.
- **Linha 86**: `} else {`
  Senao, o alvo era a cauda.
- **Linha 87**: `this.tail = newNode;`
  Atualiza cauda para o novo no.
- **Linha 88**: `}`
  Fecha condicional.
- **Linha 90**: `this.length += 1;`
  Incrementa tamanho.
- **Linha 91**: `return true;`
  Sinaliza sucesso.
- **Linha 92**: `}`
  Fecha metodo.

### Metodo `remove`

- **Linha 94**: `remove(value) {`
  Remove o primeiro no com o valor informado.
- **Linha 95**: `const nodeToRemove = this.find(value);`
  Busca no a remover.
- **Linha 97**: `if (!nodeToRemove) {`
  Se nao encontrou...
- **Linha 98**: `return null;`
  ...retorna `null`.
- **Linha 99**: `}`
  Fecha condicional.
- **Linha 101**: `if (nodeToRemove.prev) {`
  Se ha no anterior...
- **Linha 102**: `nodeToRemove.prev.next = nodeToRemove.next;`
  ...liga anterior ao proximo, "pulando" o no removido.
- **Linha 103**: `} else {`
  Se nao ha anterior, o no e a cabeca.
- **Linha 104**: `this.head = nodeToRemove.next;`
  Atualiza cabeca.
- **Linha 105**: `}`
  Fecha condicional.
- **Linha 107**: `if (nodeToRemove.next) {`
  Se ha no proximo...
- **Linha 108**: `nodeToRemove.next.prev = nodeToRemove.prev;`
  ...liga proximo ao anterior.
- **Linha 109**: `} else {`
  Se nao ha proximo, o no e a cauda.
- **Linha 110**: `this.tail = nodeToRemove.prev;`
  Atualiza cauda.
- **Linha 111**: `}`
  Fecha condicional.
- **Linha 113**: `this.length -= 1;`
  Decrementa tamanho.
- **Linha 114**: `return nodeToRemove.value;`
  Retorna valor removido.
- **Linha 115**: `}`
  Fecha metodo.

### Metodo `removeFirst`

- **Linha 117**: `removeFirst() {`
  Remove cabeca da lista.
- **Linha 118**: `if (!this.head) {`
  Se lista vazia...
- **Linha 119**: `return null;`
  ...nada para remover.
- **Linha 120**: `}`
  Fecha condicional.
- **Linha 122**: `const value = this.head.value;`
  Guarda valor da cabeca para retorno.
- **Linha 124**: `if (this.head === this.tail) {`
  Se ha um unico no...
- **Linha 125**: `this.head = null;`
  Limpa cabeca.
- **Linha 126**: `this.tail = null;`
  Limpa cauda.
- **Linha 127**: `} else {`
  Caso geral (2 ou mais nos).
- **Linha 128**: `this.head = this.head.next;`
  Nova cabeca vira o proximo no.
- **Linha 129**: `this.head.prev = null;`
  Remove referencia para tras da nova cabeca.
- **Linha 130**: `}`
  Fecha condicional.
- **Linha 132**: `this.length -= 1;`
  Decrementa tamanho.
- **Linha 133**: `return value;`
  Retorna valor removido.
- **Linha 134**: `}`
  Fecha metodo.

### Metodo `removeLast`

- **Linha 136**: `removeLast() {`
  Remove cauda da lista.
- **Linha 137**: `if (!this.tail) {`
  Se lista vazia...
- **Linha 138**: `return null;`
  ...nada para remover.
- **Linha 139**: `}`
  Fecha condicional.
- **Linha 141**: `const value = this.tail.value;`
  Guarda valor da cauda.
- **Linha 143**: `if (this.head === this.tail) {`
  Se ha um unico no...
- **Linha 144**: `this.head = null;`
  Limpa cabeca.
- **Linha 145**: `this.tail = null;`
  Limpa cauda.
- **Linha 146**: `} else {`
  Caso geral.
- **Linha 147**: `this.tail = this.tail.prev;`
  Move cauda para o no anterior.
- **Linha 148**: `this.tail.next = null;`
  Nova cauda nao aponta para nenhum proximo no.
- **Linha 149**: `}`
  Fecha condicional.
- **Linha 151**: `this.length -= 1;`
  Decrementa tamanho.
- **Linha 152**: `return value;`
  Retorna valor removido.
- **Linha 153**: `}`
  Fecha metodo.

### Metodo `clear`

- **Linha 155**: `clear() {`
  Limpa completamente a lista.
- **Linha 156**: `this.head = null;`
  Remove referencia da cabeca.
- **Linha 157**: `this.tail = null;`
  Remove referencia da cauda.
- **Linha 158**: `this.length = 0;`
  Zera tamanho.
- **Linha 159**: `}`
  Fecha metodo.

### Metodo `toArray`

- **Linha 161**: `toArray() {`
  Converte lista para array do inicio ao fim.
- **Linha 162**: `const values = [];`
  Cria array de saida.
- **Linha 163**: `let current = this.head;`
  Inicia da cabeca.
- **Linha 165**: `while (current) {`
  Percorre enquanto houver no.
- **Linha 166**: `values.push(current.value);`
  Adiciona valor atual ao array.
- **Linha 167**: `current = current.next;`
  Avanca para proximo.
- **Linha 168**: `}`
  Fecha loop.
- **Linha 170**: `return values;`
  Retorna array final.
- **Linha 171**: `}`
  Fecha metodo.

### Metodo `toReverseArray`

- **Linha 173**: `toReverseArray() {`
  Converte lista para array do fim ao inicio.
- **Linha 174**: `const values = [];`
  Cria array de saida.
- **Linha 175**: `let current = this.tail;`
  Inicia da cauda.
- **Linha 177**: `while (current) {`
  Percorre para tras.
- **Linha 178**: `values.push(current.value);`
  Adiciona valor atual.
- **Linha 179**: `current = current.prev;`
  Retrocede para anterior.
- **Linha 180**: `}`
  Fecha loop.
- **Linha 182**: `return values;`
  Retorna array invertido.
- **Linha 183**: `}`
  Fecha metodo.

### Encerramento e exportacao

- **Linha 184**: `}`
  Fecha classe `DoublyLinkedList`.
- **Linha 186**: `module.exports = DoublyLinkedList;`
  Exporta a classe para uso em outros arquivos.

---

## 2) `basic.js`

- **Linha 1**: `const DoublyLinkedList = require('./doublyLinkedList');`
  Importa a classe principal da lista.
- **Linha 3**: `const list = new DoublyLinkedList();`
  Cria uma nova lista.
- **Linha 5**: `list.append('B');`
  Insere `B` no fim.
- **Linha 6**: `list.append('C');`
  Insere `C` no fim.
- **Linha 7**: `list.prepend('A');`
  Insere `A` no inicio.
- **Linha 8**: `list.insertAfter('B', 'B.5');`
  Insere `B.5` depois de `B`.
- **Linha 10**: `console.log('Forward:', list.toArray());`
  Exibe lista da cabeca para cauda.
- **Linha 11**: `console.log('Reverse:', list.toReverseArray());`
  Exibe lista da cauda para cabeca.
- **Linha 12**: `console.log('Length:', list.length);`
  Exibe tamanho atual.
- **Linha 14**: `list.remove('B.5');`
  Remove o no com valor `B.5`.
- **Linha 15**: `list.removeFirst();`
  Remove o primeiro no.
- **Linha 16**: `list.removeLast();`
  Remove o ultimo no.
- **Linha 18**: `console.log('After removals:', list.toArray());`
  Mostra conteudo final apos remocoes.
- **Linha 19**: `console.log('Length:', list.length);`
  Mostra tamanho final.

---

## 3) `deque.js`

### Classe `Deque`

- **Linha 1**: `const DoublyLinkedList = require('./doublyLinkedList');`
  Importa lista duplamente encadeada.
- **Linha 3**: `class Deque {`
  Define estrutura deque (fila dupla).
- **Linha 4**: `constructor() {`
  Construtor do deque.
- **Linha 5**: `this.list = new DoublyLinkedList();`
  Deque usa internamente uma doubly linked list.
- **Linha 6**: `}`
  Fecha construtor.
- **Linha 8**: `pushBack(value) {`
  Adiciona elemento no fim.
- **Linha 9**: `this.list.append(value);`
  Reusa `append` da lista.
- **Linha 10**: `}`
  Fecha metodo.
- **Linha 12**: `pushFront(value) {`
  Adiciona elemento no inicio.
- **Linha 13**: `this.list.prepend(value);`
  Reusa `prepend`.
- **Linha 14**: `}`
  Fecha metodo.
- **Linha 16**: `popBack() {`
  Remove do fim.
- **Linha 17**: `return this.list.removeLast();`
  Reusa `removeLast` e retorna valor removido.
- **Linha 18**: `}`
  Fecha metodo.
- **Linha 20**: `popFront() {`
  Remove do inicio.
- **Linha 21**: `return this.list.removeFirst();`
  Reusa `removeFirst` e retorna valor removido.
- **Linha 22**: `}`
  Fecha metodo.
- **Linha 24**: `toArray() {`
  Converte estado atual do deque para array.
- **Linha 25**: `return this.list.toArray();`
  Reusa `toArray` da lista.
- **Linha 26**: `}`
  Fecha metodo.
- **Linha 27**: `}`
  Fecha classe `Deque`.

### Exemplo de uso

- **Linha 29**: `const deque = new Deque();`
  Cria deque.
- **Linha 31**: `deque.pushBack(10);`
  Entra `10` no fim.
- **Linha 32**: `deque.pushBack(20);`
  Entra `20` no fim.
- **Linha 33**: `deque.pushFront(5);`
  Entra `5` no inicio.
- **Linha 35**: `console.log('Deque:', deque.toArray());`
  Mostra estado atual.
- **Linha 36**: `console.log('popFront:', deque.popFront());`
  Remove e mostra valor do inicio.
- **Linha 37**: `console.log('popBack:', deque.popBack());`
  Remove e mostra valor do fim.
- **Linha 38**: `console.log('Deque after pops:', deque.toArray());`
  Mostra estado apos remocoes.

---

## 4) `history.js`

### Classe `History`

- **Linha 1**: `const DoublyLinkedList = require('./doublyLinkedList');`
  Importa lista duplamente encadeada.
- **Linha 3**: `class History {`
  Define classe de historico com undo/redo.
- **Linha 4**: `constructor() {`
  Construtor.
- **Linha 5**: `this.list = new DoublyLinkedList();`
  Estrutura interna para estados visitados.
- **Linha 6**: `this.current = null;`
  Ponteiro para estado atual.
- **Linha 7**: `}`
  Fecha construtor.

### Metodo `visit`

- **Linha 9**: `visit(state) {`
  Registra nova pagina/estado no historico.
- **Linha 10**: `if (this.current && this.current.next) {`
  Se estamos no meio da historia (ha "futuro"), precisa cortar o ramo de redo.
- **Linha 11**: `this.list.tail = this.current;`
  Define cauda como estado atual.
- **Linha 12**: `this.current.next.prev = null;`
  Desconecta o bloco futuro da parte atual (ponteiro de volta).
- **Linha 13**: `this.current.next = null;`
  Corta referencia para frente.
- **Linha 14**: `this.list.length = this.list.toArray().length;`
  Recalcula tamanho com base na lista apos o corte.
- **Linha 15**: `}`
  Fecha condicional.
- **Linha 17**: `this.list.append(state);`
  Adiciona novo estado ao fim.
- **Linha 18**: `this.current = this.list.tail;`
  Atualiza ponteiro atual para o estado mais recente.
- **Linha 19**: `}`
  Fecha metodo.

### Metodo `undo`

- **Linha 21**: `undo() {`
  Volta um estado, se possivel.
- **Linha 22**: `if (!this.current || !this.current.prev) {`
  Se nao existe atual ou nao ha anterior...
- **Linha 23**: `return this.current ? this.current.value : null;`
  ...mantem estado atual (ou `null` se nao existir).
- **Linha 24**: `}`
  Fecha condicional.
- **Linha 26**: `this.current = this.current.prev;`
  Move para estado anterior.
- **Linha 27**: `return this.current.value;`
  Retorna novo estado atual.
- **Linha 28**: `}`
  Fecha metodo.

### Metodo `redo`

- **Linha 30**: `redo() {`
  Avanca um estado, se possivel.
- **Linha 31**: `if (!this.current || !this.current.next) {`
  Se nao existe atual ou nao ha proximo...
- **Linha 32**: `return this.current ? this.current.value : null;`
  ...mantem estado atual (ou `null`).
- **Linha 33**: `}`
  Fecha condicional.
- **Linha 35**: `this.current = this.current.next;`
  Move para frente.
- **Linha 36**: `return this.current.value;`
  Retorna estado atual apos redo.
- **Linha 37**: `}`
  Fecha metodo.

### Metodo `getCurrent`

- **Linha 39**: `getCurrent() {`
  Le estado atual sem mover ponteiros.
- **Linha 40**: `return this.current ? this.current.value : null;`
  Retorna valor atual ou `null`.
- **Linha 41**: `}`
  Fecha metodo.
- **Linha 42**: `}`
  Fecha classe `History`.

### Exemplo de uso

- **Linha 44**: `const history = new History();`
  Cria historico.
- **Linha 46**: `history.visit('Home');`
  Visita `Home`.
- **Linha 47**: `history.visit('Profile');`
  Visita `Profile`.
- **Linha 48**: `history.visit('Settings');`
  Visita `Settings`.
- **Linha 50**: `console.log('Current:', history.getCurrent());`
  Mostra estado atual.
- **Linha 51**: `console.log('Undo ->', history.undo());`
  Volta um passo.
- **Linha 52**: `console.log('Undo ->', history.undo());`
  Volta mais um passo.
- **Linha 53**: `console.log('Redo ->', history.redo());`
  Avanca um passo.
- **Linha 55**: `history.visit('Help');`
  Visita novo estado apos undo/redo; isso elimina futuro anterior de redo.
- **Linha 56**: `console.log('Current after new visit:', history.getCurrent());`
  Mostra estado atual.
- **Linha 57**: `console.log('Redo after new visit:', history.redo());`
  Tenta redo; como o ramo futuro foi cortado, nao avanca.

---

## Observacao util

No `README.md` desta pasta, os nomes de exemplo citados (`example-basic.js`, `example-deque.js`, `example-history.js`) estao diferentes dos arquivos reais (`basic.js`, `deque.js`, `history.js`).
