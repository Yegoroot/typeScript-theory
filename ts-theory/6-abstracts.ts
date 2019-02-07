/**
 * Абстрактный класс это тот класс который не имеет экземпляры но НАСЛЕДУЕТСЯ
 * Мы переносим предметы с объективной реальности в виртуальную =>
 * Например "прямоугольник" это класс, "круг" класс, а вот "фигура" абстрактный класс
 */

/**
 * В мире есть абстрактное собирательное понятие "животное"
 */
abstract class Animal {
	constructor(public name: string) {}
	abstract makeSound() // абстарктный метод

	public move(): void {
		console.log(this.name + ' передвигается')
	}
}

class Cat extends Animal {
	constructor() {
		super('Cat')
	}
	// обязательная реализация абстрактного метода
	makeSound() {
		console.log('Мяу Мяу')
	}
}

class Caw extends Animal {
	constructor() {
		super('Caw')
	}
	makeSound() {
		console.log('Му Му')
	}
}
