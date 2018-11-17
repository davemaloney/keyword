# Keywords

Demonstration of different possible methods of filtering a table. One shows a simple string-matching search, the second shows a more customizable, "fuzzy" matching system based on [fuse.js](https://www.npmjs.com/package/fuse.js), and the third shows the same fuzzy matching system with the table rearchitected to allow for dynamic sorting. The first two use a simple show/hide mechanism, but the third actually creates and destroys the table on the fly with each keystroke, so the accessibility and performance considerations have to be completely different.

## Prerequisities

```
$ node -v
v11.0.0
$ npm -v
6.4.1
```

## Get Started

```
$ git clone https://github.com/davemaloney/keyword.git
$ cd keyword
$ npm install
$ npm start
```

Webpack should open a browser at http://localhost:8080.
