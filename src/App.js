import React, { Component } from 'react';
import Countdown from './components/Countdown';
// import glamorous from 'glamorous';

// const Wrapper = glamorous.div({
//   color: 'blue',
//   display: 'flex'
// });

class App extends Component {
  state = {
    currentDate: new Date(),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount() {
    const deadline = new Date('July 20, 2018 17:30');
    this.interval = setInterval(() => {
      const dateDiff = this.countdownUpdate(deadline);
      if (dateDiff) {
        this.setState(dateDiff);
      } else {
          this.stopInterval();
        }
    }, 1000);
  }

  componentWillUnmount() {
    this.stopInterval();
  }

  countdownUpdate(deadline) {
    let diff = (Date.parse(deadline) - Date.parse(this.state.currentDate)) / 1000;
    if (diff <= 0) {
      return false;
    }
    const remaining = {
      currentDate: new Date(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };


    if (diff >= 86400) {
      remaining.days = Math.floor(diff / 86400);
      diff = diff - (remaining.days * 86400);
    }

    if (diff >= 3600) {
      remaining.hours = Math.floor(diff / 3600);
      diff = diff - (remaining.hours * 3600);
    }

    if (diff >= 60) {
      remaining.minutes = Math.floor(diff / 60);
      diff = diff - (remaining.minutes * 60);
    }

    remaining.seconds = diff;

    return remaining;

  }

  stopInterval() {
    clearInterval(this.interval);
  }

  render() {
    const remaining = this.state;
    return (
      <div>
        <p>STARTS IN</p>
        <div>
          <Countdown number={remaining.days} unit='Days' ></Countdown>
          <Countdown number={remaining.hours} unit='Hours' ></Countdown>
          <Countdown number={remaining.minutes} unit='Minutes' ></Countdown>
          <Countdown number={remaining.seconds} unit='Seconds' ></Countdown>
        </div>
      </div>
    );
  }
}

export default App;
