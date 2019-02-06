class Message {
	// модификаторы доступа
	public messageText: string // доступный метод для всех
	private priv: number // доступный метод внутри класса
	protected prot: string // доступен для класса и ближайших потомков

	constructor(text: string, priv: number, prot: string) {
		this.messageText = text
	}
	// constructor(public text: string, private priv: number) {
	// 	this.messageText = text
	// }
	method() {
		alert(this.messageText)
	}
}

let text = new Message('hello', 123, 'asd')
text.method()
