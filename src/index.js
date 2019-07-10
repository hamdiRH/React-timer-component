import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeMs: 0,
      btn: "start",
      interval: 0
    };
  }
  start = () => {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({
        interval: 0,
        btn: "start"
      });
    } else {
      const interval = setInterval(() => {
        this.setState({
          timeMs: this.state.timeMs + 1000
        });
      }, 1000);
      this.setState({
        interval,
        btn: "pause"
      });
    }
  };

  reset = () => {
    this.setState.timeMs = 0;
    if (!this.state.interval) {
      this.setState({
        timeMs: 0,
        interval: 0
      });
      return;
    }
    clearInterval(this.state.interval);
    this.setState({
      timeMs: 0,
      interval: 0
    });
  };
  render() {
    return (
      <div className="center mt-5">
        <Time ms={this.state.timeMs} />
        <button
          className="btn border border-danger"
          type="button"
          style={{ height: "60px", borderRadius: "50%", width: "60px" }}
          onClick={this.start}
        >
          {this.state.btn === "start" ? (
            <i class="far fa-play-circle" style={{ fontSize: "25px" }} />
          ) : (
            <i class="far fa-pause-circle" style={{ fontSize: "25px" }} />
          )}
        </button>
        <button
          className="btn border border-danger"
          style={{ height: "60px", borderRadius: "50%", width: "60px" }}
          type="button"
          value="Reset"
          onClick={this.reset}
        >
          <i class="fas fa-stop" style={{ fontSize: "25px" }} />
        </button>
      </div>
    );
  }
}
const msToTime = ms => {
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  const hours = Math.floor(ms / msPerHour);
  const hoursRest = ms % msPerHour;
  const minutes = Math.floor(hoursRest / msPerMinute);
  const minutesRest = hoursRest % msPerMinute;
  const seconds = Math.floor(minutesRest / msPerSecond);
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
};

const Time = ({ ms }) => {
  return (
    <div className="time-container">
      <div className="time-inner-container">
        <div className="time-digits">{msToTime(ms)}</div>
        <div className="time-text">
          <div className="time-text-item">Hour</div>
          <div className="time-text-item">Minute</div>
          <div className="time-text-item">Second</div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
