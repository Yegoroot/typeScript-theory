/**
 * ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ
 */
// можем сделать ОПЦИОНАЛЬНЫЙ ПАРАМЕТР, опциональные параметры всегда идут последними
function getFullName(firstName: string, lastName?: string): string {
	return lastName ? firstName + ' ' + lastName : firstName
}

// параметры по умолчанию default-initialize parametrs
function getDisplayName(firstName: string, lastName: string = 'Ivanov'): string {
	return firstName + ' ' + lastName
}

/**
 * РЕСТ ПАРАМЕТРЫ
 */
// rest параметры это набор параметров которые не ограничены
function printVal(message: string, ...names: string[]): void {
	console.log(names, message)
}
