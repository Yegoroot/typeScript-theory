/**
 * Generic - обобщенный тип или шаблон - специальный тип данных,
 * который позволяет создавать компоненты не привязываясь к конкретному типу данных,
 * а указывать этот тип данных во время создания компонента (под компонентом мы подразумеваем классы)
 * */

// по сути это шаблон для типизации, при создании мы сами выберим нужный нам тип
class MyClass<T> {
	public value: T
	public method(): T {
		return this.value
	}
}
let my = new MyClass<number>()

function myFanc<T>(value: T): T {
	return value
}

function myFancArr<T>(value: T[]): T[] {
	console.log(value.length)
	return value
}
