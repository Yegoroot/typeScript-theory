import {Sorter} from './Sorter'
import {CharactersCollection} from './CharactersCollection'
import {NumbersCollection} from './NumbersCollection'

const numbersCollection = new NumbersCollection([10, 3, -1, -5, 1])
numbersCollection.sort()

const charactersCollection = new CharactersCollection('XZWXaaqwq')
charactersCollection.sort()

console.log(numbersCollection.data)
console.log(charactersCollection.data)