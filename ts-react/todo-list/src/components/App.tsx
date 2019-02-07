import * as React from 'react'
/**
 * class App extends React.Component<any, any>
 * <any, any> - <props, state>
 */
import Todo from './todo/todo'

export default class App extends React.Component<{}, {}> {
	render() {
		const title = 'TODO LIST'
		return (
			<div>
				<h1>Root Component in App.js </h1>
				<Todo title={title} />
			</div>
		)
	}
}
