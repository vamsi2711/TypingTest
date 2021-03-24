import React from 'react';
import { TestContainer } from '../TestContainer/TestContainer';
import './App.css';
import { typingTestData} from './../../data/source'
import { randomElementSelector } from './../../helper/randomSelector';
import { testDetailsCalculator } from './../../helper/testDetailsCalculator'

const defaultState = {
	timerStarted: false,
	timerValue: 30,
	selectedParagraph: randomElementSelector(typingTestData),
	detailsContainer: {
		words: 0,
		characters: 0,
		mistakes: 0
	}
}

class App extends React.Component {
	constructor () {
		super();

		this.state = defaultState
	}

	triggerTryAgain = ()=> this.setState(defaultState);

	handleOnType=(inputValue)=>{
		console.log("From App Component..",inputValue)
		if (!this.state.timerStarted)this.startTimer();
		this.setState({detailsContainer: testDetailsCalculator(this.state.selectedParagraph,inputValue)})
	}

	startTimer = ()=>{
		this.setState({timerStarted: true})
		const timer = setInterval(()=>{
			if (this.state.timerValue>0){
				this.setState({timerValue: this.state.timerValue-1})
			}else{
				clearInterval(timer);
			}

		},1000)
	}

	render() {
		return (
			<div className="app-container">
				<h1 className="main-heading">Speedy Type</h1>
				<div className="test-container-main">
					<TestContainer
						timerStarted={this.state.timerStarted}
						timerValue={this.state.timerValue}
						handleOnType={this.handleOnType}
						triggerTryAgain = {this.triggerTryAgain}
						selectedParagraph = {this.state.selectedParagraph}
						words = {this.state.detailsContainer.words}
						characters={this.state.detailsContainer.characters}
						mistakes={this.state.detailsContainer.mistakes}
					/>
				</div>
			</div>
		)
	}
}

export default App;
