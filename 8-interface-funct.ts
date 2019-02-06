// интерфейс может описывать сигнатуру ф-ии
interface Searchable {
	(value: string): boolean
}

let myArr1: Searchable = (value: string): boolean => false
