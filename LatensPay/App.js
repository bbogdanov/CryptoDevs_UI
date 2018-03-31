import React from "react";
import { SignedOut, SignedIn } from "./navigation/RootNavigation";

export default class App extends React.Component {
  render() {
    return <SignedIn />;
  }
}

