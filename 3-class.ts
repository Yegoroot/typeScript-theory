class Message {
	private _width: number

	// модификаторы доступа
	public messageText: string // доступный метод для всех
	private priv: number // доступный метод внутри класса
	protected prot: string // доступен для класса и ближайших потомков

	// этот метод только классу принадлежит
	static staticMethod(): string {
		return 'string'
	}

	constructor(text: string, priv: number, prot: string) {
		this.messageText = text
	}
	// constructor(public text: string, private priv: number) {
	// 	this.messageText = text
	// }
	method() {
		alert(this.messageText)
	}

	// accessors - механизм, который позволяет перехватить обращения к члену объекта на запись или чтение
	// getter
	get width(): number {
		return this._width
	}
	//setter
	set width(value: number) {
		if (value > 0) this._width = value
	}
}

let text = new Message('hello', 123, 'asd')
text.method()
text.width = 8000 // set width
console.log(text.width) // get width
