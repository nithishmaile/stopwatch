// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {count: 0, isTimerRunning: false}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  onUpdateTimer = () => {
    this.setState(preVState => ({
      count: preVState.count + 1,
      isTimerRunning: !preVState.isTimerRunning,
    }))
  }

  startTimer = () => {
    this.timerId = setInterval(this.onUpdateTimer, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    this.setState({count: 0, isTimerRunning: false})
    clearInterval(this.timerId)
  }

  onRenderSeconds = () => {
    const {count} = this.state
    const seconds = Math.floor(count % 60)
    if (seconds < 10) {
      return `0{seconds}`
    }
    return seconds
  }

  onRenderMinutes = () => {
    const {count} = this.state
    const minutes = Math.floor(count / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.onRenderMinutes()}:${this.onRenderSeconds()}`

    return (
      <div className="bg-container">
        <div>
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="card-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                id="timer"
              />
              <label htmlFor="timer" className="timer-heading">
                Timer
              </label>
            </div>
            <h1>00:0{time}</h1>
            <div>
              <button
                type="button"
                className="button green"
                onClick={this.startTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button red"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button orange"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
