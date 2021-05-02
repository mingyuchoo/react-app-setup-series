import React, { Component } from "react";
import SafeJourney from "./systems/safe-journey/SafeJourney";
import SleepyPlains from "./systems/sleepy-plains/SleepyPlains";

type AppProps = {};
type AppState = {};

export default class App extends Component<AppProps, AppState> {
  render() {
    return (
      <>
        <SafeJourney />
        <hr />
        <SleepyPlains />
      </>
    );
  }
}
