# SUDOKUHALL

A web app to play sudoku puzzles with various levels of difficulty

Personal project created with the intention of studying Vue.js and Laravel. It is a revamp of the [react_sudokuhall](https://github.com/erarich/react_sudokuhall) project, which was originally written with the React framework, but now includes a backend.

### Stack

* Laravel (PHP) - version 10
* Vue.js (JavaScript) - version 3
* Pinia (standard Vue.js library for state management)
* Vuetify (standard Vue.js library for design; Vue.js componentes)
* Vue Router (standard Vue.js library for page routing)

## How to install and run the project

Requeriments: [composer](https://getcomposer.org/download/),  [npm (Node.js)](https://nodejs.dev/pt/download/), [curl-php](https://www.php.net/manual/en/book.curl.php) and [xml-php](https://www.php.net/manual/pt_BR/book.simplexml.php).

Clone the project:

    git clone https://github.com/erarich/vue_laravel_sudokuhall.git

Enter the project directory:

    cd vue_laravel_sudokuhall

Rename the env.example file to .env and fill it with your local info, then:

Update composer:

    composer update

Install the PHP and JavaScript dependencies:

    composer install
    npm install

Generate Lavarel keys:

    php artisan key:generate
    
Run the Vite development server:

    npm run dev
 
Run the Laravel development server:

    php artisan serve


## License

[Unlicense/Public Domain](https://choosealicense.com/licenses/#unlicense). You can use app this as you wish.

Sudokuhall utilizes a third party library to generate and solve the sudoku puzzles: [SudokuToolCollection](https://www.npmjs.com/package/sudokutoolcollection). So, if you use this app, you must include the licenses below.

[The MIT License (MIT)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2014 Rob McGuire-Dale Copyright (c) 2020 Markus Flür

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments

* [manin-dev/laravel-vue-boilerplate](https://github.com/manin-dev/laravel-vue-boilerplate) - for the boilerplate.
* [ImKennyYip/Sudoku](https://github.com/ImKennyYip/Sudoku) - for the basic tutorial with vanilla JavaScript.
* [lacrioque/sudoku.js](https://github.com/lacrioque/sudoku.js) - for the sudoku generator library.
* [robatron/sudoku.js](https://github.com/robatron/sudoku.js) - also for the sudoku generator library.


