import {Sorter} from './Sorter'
import {CharactersCollection} from './CharactersCollection'
// import {NumbersCollection} from './NumbersCollection'

// const numbersCollection = new NumbersCollection([10, 3, -1, -5, 1])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection('XZWXaaqwq')
const sorter = new Sorter(charactersCollection)

sorter.sort()

console.log(charactersCollection.data)