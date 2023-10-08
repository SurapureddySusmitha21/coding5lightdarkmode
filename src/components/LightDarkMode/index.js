// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isModeOf: true}

  clickMode = () => {
    this.setState(prevsState => ({isModeOf: !prevsState.isModeOf}))
  }

  render() {
    const {isModeOf} = this.state
    const modeClassName = isModeOf ? 'dark mode' : 'light mode'
    const buttonText = isModeOf ? 'Light Mode ' : 'Dark Mode'

    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="heading">Click Change To Mode</h1>
          <div className="button-container">
            <button className="button" type="button" onClick={this.clickMode}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
