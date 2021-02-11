"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -1, -5, 1]);
numbersCollection.sort();
var charactersCollection = new CharactersCollection_1.CharactersCollection('XZWXaaqwq');
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
