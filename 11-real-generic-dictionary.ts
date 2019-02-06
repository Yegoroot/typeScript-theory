class Dictionary<TKey, TValue> {
	private data: keyValuePair<TKey, TValue>[] = []

	public add(key: TKey, value: TValue) {
		let entry = new keyValuePair<TKey, TValue>()
		entry.key = key
		entry.value = value
		this.data.push(entry)
	}

	public getValue(key: TKey): TValue | null {
		// пробегаем по массиву / если находим возвращаем значение иначе null
		let ret = this.data.find(item => item.key === key)
		return ret ? ret.value : null
	}
}

let dictionary1 = new Dictionary<string, string>()
dictionary1.add('Hello', 'Привет')
dictionary1.add('Dictionary', 'Словарь')

let dictionary2 = new Dictionary<number, boolean>()
dictionary2.add(1, true)
dictionary2.add(45, false)
