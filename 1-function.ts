/**
 * ВВЕДЕНИЕ
 */
// в этой ф-ии мы ждем числа !important и возвращаем число !important
function forExample(x: number, y: number): number {
	return x + y
}

/**
 * ОПИСАНИЕ ТИПА ФУНКЦИИ
 * при создании переменной можно указать тип данных определяющий сигнатуру ф-ии
 */
// параметры => возвращаемый тип
let myAdd: (x: number, y: number) => number // принимает два значения number, возвращает number
let myProc: () => void // переменной может быть присвоена ф-ия, которая ничего не принимает и не возвращает

function myAddDeclaration(x: number, y: number): number {
	return x + y
}
myAdd = myAddDeclaration
console.log(myAdd(10, 20))

myProc = function() {
	console.log('Its func from void')
}
myProc()

/**
 * ARROW FUNCTION
 */
let incrementArrow1 = (x: number) => x + 1
let incrementArrow2 = x => x + 1 // any
let incrementArrow3: (x: number) => number = x => x + 1 // from external lib
