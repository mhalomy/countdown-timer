import React, { Component } from 'react';
import Countdown from './components/Countdown';
import glamorous from 'glamorous';

const MainWrapper = glamorous.div({
  marginLeft: '10px',
  marginTop: '10px'
})

const CountdownWrapper = glamorous.div({
  display: 'flex'
});

const Start = glamorous.div({
  fontSize: '0.75em',
  fontWeight: 'bold'
})

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

  addZero(number) {
    if (number <= 9) {
      return '0' + String(number);
    } else {
      return number;
    }
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  render() {
    const remaining = this.state;
    return (
      <MainWrapper>
        <Start>STARTS IN</Start>
        <CountdownWrapper>
          <Countdown number={this.addZero(remaining.days)} unit={remaining.days === 1 ? 'DAY' : 'DAYS'} ></Countdown>
          <Countdown number={this.addZero(remaining.hours)} unit={remaining.hours === 1 ? 'HOUR' : 'HOURS'} ></Countdown>
          <Countdown number={this.addZero(remaining.minutes)} unit={remaining.minutes === 1 ? 'MINUTE' : 'MINUTES'} ></Countdown>
          <Countdown number={this.addZero(remaining.seconds)} unit={remaining.seconds === 1 ? 'SECOND' : 'SECONDS'} ></Countdown>
        </CountdownWrapper>
      </MainWrapper>
    );
  }
}

export default App;
