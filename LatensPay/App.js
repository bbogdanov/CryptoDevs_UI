import React from "react";
import {createRootNavigator} from "./navigation/RootNavigation";
import {isSignedIn} from "./services/Auth";
import {Spinner} from "native-base";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            ready: false,
        };
    }

    componentDidMount() {
        this.auth().done();
        this.loadFonts();
    }

    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        });

        this.setState({ready: true});
    }

    async auth() {
        signedIn = await isSignedIn();
        this.setState({signedIn});
    }

    render() {
        const {signedIn} = this.state;
        const Layout = createRootNavigator(signedIn);

        if (!this.state.ready) {
            return  <Spinner color='green' />;
        }

        return <Layout/>
    }
}

