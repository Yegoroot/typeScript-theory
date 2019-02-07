class Base {
	private value1: string
	public value2: string
	protected value3: string

	constructor() {
		this.value1 = 'private value 1'
		this.value2 = 'public value 2'
		this.value3 = 'protected value 3'
	}

	private method1 = () => console.log('private method 1 call')
	public method2 = () => console.log('public method 2 call')
	protected method3 = () => console.log('protected method 3 call')
}

// Класс Derived наследует класс Base
// Класс Derived расширяет класс Base
class Derived extends Base {
	constructor() {
		super() // вызов конструктора обязательного класса !important
		console.log('public property = ', this.value2)
		console.log('protected property = ', this.value3)
	}
}

let delivered1: Derived = new Derived()

delivered1.method2()
