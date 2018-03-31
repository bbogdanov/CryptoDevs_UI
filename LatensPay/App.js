import React from "react";
import { SignedOut, SignedIn, createRootNavigator } from "./navigation/RootNavigation";
import { isSignedIn } from "./services/Auth";
import { AsyncStorage } from "react-native";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false
        };
    }

    componentDidMount() {
        this.auth().done();
    }

    async auth() {
        signedIn = await isSignedIn();
        this.setState({ signedIn });
    }

    render() {
        const { signedIn } = this.state;
        const Layout = createRootNavigator(signedIn);
        return <Layout />;
    }
}

