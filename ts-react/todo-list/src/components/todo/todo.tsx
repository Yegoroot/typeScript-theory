import * as React from 'react'

export default class Todo extends React.Component<IProps, {}> {
	render() {
		return (
			<form>
				<h2>{this.props.title}</h2>
				<input type="text" />
				<input type="text" />
				<button>add task</button>
			</form>
		)
	}
}

interface IProps {
	title: string
}
