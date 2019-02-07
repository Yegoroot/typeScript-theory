// БАЗОВЫЙ ТИП ДАННЫХ
class Shape {
	public name: string

	constructor(name) {
		this.name = name
	}

	public getInfo(): string {
		return `This is ${this.name}`
	}
}

// ПРОИЗВОДНЫЙ ТИП ДАННЫХ
class Rect extends Shape {
	public width: number
	public height: number

	constructor(width: number, height: number) {
		super('Rectangle') // запуск конструктора родителя
		this.width = width
		this.height = height
	}

	public getInfo(): string {
		let baseInfo = super.getInfo() // вызвали метод род. класса
		return `${baseInfo} Height: = ${this.height}`
	}
}

// ПРОИЗВОДНЫЙ ТИП ДАННЫХ
class Circle extends Shape {
	public radius: number

	constructor(radius: number) {
		super('Circle')
		this.radius = radius
	}

	public getInfo(): string {
		let baseInfo = super.getInfo()
		return `${baseInfo} Radius: = ${this.radius}`
	}
}

/**
 * СОЗДАЕМ коллекцию с определенной структурой
 */
let shapes: Shape[] = [] // создали массив базового типа
shapes.push(new Rect(1000, 100))
shapes.push(new Circle(1000))

// в массив shapes можно добавлять только объекты имеющие идентичную Shape структуру
shapes.push({
	name: 'foo',
	getInfo: () => 'rar',
})
