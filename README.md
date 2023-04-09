# SUDOKUHALL

Aplicação web onde é possível completar jogos de sudoku.

Projeto pessoal criado com a intenção de estudar Vue.js e Laravel, trata-se de uma reformulação do projeto [react_sudokuhall](https://github.com/erarich/react_sudokuhall), escrito com o framework React, agora com adição de back-end.

### Funcionamento

Hierarquia de Componentes:


A página inicial (Home) é composta por dois componentes principais, sendo eles GameSection e GameOptionsSection, no qual ambos retornam elementos html <section>. GameSection é a seção onde está presente o tabuleiro do sudoku além do elemento que é renderizado quando um puzzle é completado (o componente GameCompletion). GameOptionsSection é a seção no qual estão as opções para gerenciamento do sudoku.


Um **jogo completo** possui as seguintes informações:

* Dificuldade
* Erros
* Tempo de conclusão
* Pontuação

### Stack utilizada

* Laravel (PHP) - versão 10
* Vue.js (JavaScript) - versão 3
* Pinia (biblioteca padrão Vue.js para gerenciamento de estados)
* Vuetify (biblioteca padrão Vue.js para design; componentes Vue.js)
* Vue Router (biblioteca padrão Vue.js para roteamento)

## Como instalar e rodar o projeto

Requisitos: [composer](https://getcomposer.org/download/) e [npm (Node.js)](https://nodejs.dev/pt/download/) 

Clone o projeto:

    git clone https://github.com/erarich/vue_laravel_sudokuhall.git

Instale as dependências de PHP e JavaScript:

    composer install
    npm install
    
Rode o servidor de desenvolvimento do Vite:

    npm run dev
 
Rode o servidor de desenvolvimento do Laravel:

    php artisan serve


## Licenças

[Unlicense/Public Domain](https://choosealicense.com/licenses/#unlicense). Sem licença, utilize como quiser.

Sudokuhall utiliza biblioteca de terceiros para a geração de sudokus: [SudokuToolCollection](https://www.npmjs.com/package/sudokutoolcollection). Então, se você utilizar essa aplicação, precisa incluir as licenças:

[The MIT License (MIT)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2014 Rob McGuire-Dale Copyright (c) 2020 Markus Flür

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Créditos

* [manin-dev/laravel-vue-boilerplate](https://github.com/manin-dev/laravel-vue-boilerplate) - pelo boilerplate.
* [ImKennyYip/Sudoku](https://github.com/ImKennyYip/Sudoku) - pelo tutorial basico com JavaScript vanilla.
* [lacrioque/sudoku.js](https://github.com/lacrioque/sudoku.js) - pela biblioteca geradora de sudoku.
* [robatron/sudoku.js](https://github.com/robatron/sudoku.js) - também pela biblioteca geradora de sudoku.



