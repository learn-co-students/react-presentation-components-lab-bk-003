const React = require('react');

class DumbComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mood: 'happy'
		}
		this.toggleMood = this.toggleMood.bind(this)
	}

	toggleMood() {
		const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
		this.setState({mood})
	}

	render() {
		return (
			<div onClick={this.toggleMood}>{this.state.mood}</div>
		)
	}
}

module.exports = DumbComponent;