"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// import {NumbersCollection} from './NumbersCollection'
// const numbersCollection = new NumbersCollection([10, 3, -1, -5, 1])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
var charactersCollection = new CharactersCollection_1.CharactersCollection('XZWXaaqwq');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
