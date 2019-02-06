/**
 * Generic - обобщенный тип или шаблон - специальный тип данных,
 * который позволяет создавать компоненты не привязываясь к конкретному типу данных,
 * а указывать этот тип данных во время создания компонента (под компонентом мы подразумеваем классы)
 * */

// по сути это шаблон для типизации, при создании мы сами выберим нужный нам тип
class MyGenericClass<T> {
	public value: T
	public method(value: T): T {
		return this.value
	}
}
let myNumber = new MyGenericClass<number>()
myNumber.method(120)
let myString = new MyGenericClass<string>()
myString.method('string')

/**
 * НЕКОТОРЫЕ ДРУГИЕ ВОЗМОЖНОСТИ
 */
function myFanc<T>(value: T): T {
	return value
}

function myFancArr<T>(value: T[]): T[] {
	console.log(value.length)
	return value
}

/**
    ОПИСЫВАЕМ GENERIC FUNCTION
 */
interface GenericFunc {
	<T>(arg: T): T
}

function testFunc<T>(arg: T): T {
	return arg
}

let myGenericFunc: GenericFunc = testFunc

myGenericFunc(10)
