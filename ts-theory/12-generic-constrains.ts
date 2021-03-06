interface Countable {
	count: number
}

/**
 * <T extends Countable> - ограничения, указывающие на то что T (type valiable)
 * должна быть типом данных, который реализовывает интерфейс Countable, так как
 * логика класса SortableList подразумевает использование свойства count
 */
class SortableList<T extends Countable> {
	private data: T[] = []
	public add(item: T) {
		this.data.push(item)
	}
	public showSorted() {
		// (a, b) => a.count - b.count - данное выражение компилируется благодоря ограничению
		// TS компилятор знает, что тип данных переданный в качестве T
		// будет содержать свойство count
		let sorted: T[] = this.data.sort((a, b) => a.count - b.count)
		sorted.forEach(x => console.log(x))
	}
}

class OrdersArchive implements Countable {
	month: string
	count: number
	totalAmount: number

	constructor(month: string, count: number, totalAmount: number) {
		this.month = month
		this.count = count
		this.totalAmount = totalAmount
	}
}

let list = new SortableList<OrdersArchive>()

list.add(new OrdersArchive('Junuary', 11, 23400))
list.add(new OrdersArchive('February', 8, 34400))
list.add(new OrdersArchive('March', 12, 22789))

list.showSorted() // сортируем по количеству заказов
