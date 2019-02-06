/**
 * Интерфейс - специальный тип данных определяющий КОНТРАКТ, которого должен придерживаться определенный объект
 * Можно сравнить с флешкой например производители ПК и производители флешек разные, но не смотря на это они придерживаются определенных стандартов
 * мы заставляем класс придержживаться определенного стандарта
 */

interface Report {
	name: string
	age?: number // не обязательный параметр
	log: () => string
}

// в классе
class DailyReport implements Report {
	name: string = 'Daily Report'
	log = (): string => 'Some text'
}

// в ф-ии
function writeReport(r: Report) {
	console.log(r.log())
}

let report1 = {
	name: 'Report 1',
	log: () => 'This report of ' + this.name,
}
let report2 = {
	age: 25,
}

writeReport(report1)
// writeReport(report2) // ERROR - отчет не соответсвует
