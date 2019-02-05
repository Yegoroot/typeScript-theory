// STRING
let str: string = 'string'

// NUMBER
let num: number = 10

// BOOLEAN
let isVal: boolean = true

// OTHER
let unknownAny: any = '1'
let unknownSeveral: string | number = 125
unknownAny = 'string'

// ARRAY
let numArray1: number[] = [1, 2, 3]
let numArray2: Array<number> = [1, 2, 3]

let strArray1: string[] = ['1', '2', '3']
let strArray2: Array<string> = ['1', '2', '3']

let boolArray1: boolean[] = [true, false]
let boolArray2: Array<boolean> = [true, false]
let arrArray: Array<Array<number>> = [[12], [13]]

// TUPLES кортеж
let array: [number, number, string] = [1, 2, '3']

// ENUMS - перечисляемый тип
/** этот тип данных позволяет собрать набор целочисленных значений
 * и предоставляет им осмысленные имена
 * Red = 0, Green = 1, Blue = 2 */

enum Color {
	Red,
	Green,
	Blue,
}
let c1: Color = Color.Green // 1

/**
 * Каждому элементу перечисления можно явно указывать значение
 */
enum Status {
	Success = 1,
	Error = 2,
	Reject = 10,
}
let c2: Status = Status.Reject // 10

/** использование перечисления очень помогает понять код другим разработчкам
 * например следующий пример покажет как понятно можно отрисовать картинку передавая параметр
 * enums а не цифру ИТАК
 */
enum Frut {
	Apple,
	Orange,
	Default,
}
function draftImage(frut: number) {
	// создаем img
	let imgElement: HTMLImageElement = document.createElement('img')
	switch (frut) {
		case Frut.Apple:
			imgElement.src = '/apple.jpg'
			break
		case Frut.Orange:
			imgElement.src = '/orange.jpg'
		default:
			imgElement.src = '/default.jpg'
			break
	}
}
draftImage(Frut.Apple) // так в разы понятней что мы увидим в итоге
