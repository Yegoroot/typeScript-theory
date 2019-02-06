class keyValuePair<TKey, TValue> {
	private _key: TKey

	public set key(value: TKey) {
		if (!value) {
			throw new Error('Значение value не может быть пустым')
		}
		this._key = value
	}

	public get key(): TKey {
		return this._key
	}

	private _value: TValue

	public set value(value: TValue) {
		if (!value) {
			throw new Error('Значение value не может быть пустым')
		}
		this._value = value
	}

	public get value(): TValue {
		return this._value
	}
}

let strAndNum = new keyValuePair<string, number>()
strAndNum.key = 'key1'
strAndNum.value = 123
