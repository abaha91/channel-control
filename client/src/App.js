import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import Provider  from 'Provider/providers';
import AppContext  from 'Context/AppContext/AppContext';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.Provider = new Provider();
        this.setSettingsBarVisibility = () => {
            this.setState({
                settingsBarVisibility: !this.state.settingsBarVisibility,
            });
        };

        this.setIsLoginProcess = () => {
            this.setState({
                isLoginProcess: true,
                isRegistrationProcess: false,
                settingsBarVisibility: false,

            });
        };

        this.setIsRegistrationProcess = () => {
            this.setState({
                isRegistrationProcess: true,
                isLoginProcess: false,
                settingsBarVisibility: false,
            });
        };



        this.state = {
            isAuth: false,
            isRegistrationProcess: false,
            isLoginProcess: false,
            settingsBarVisibility: false,
            setSettingsBarVisibility: this.setSettingsBarVisibility,
            setIsLoginProcess: this.setIsLoginProcess,
            setIsRegistrationProcess: this.setIsRegistrationProcess,
            channelData: undefined,
        };

    }

    componentDidMount() {
        this.Provider.fetchChannelData('5d6e78dcb9a0e4279cd3334d')
            .then(response => {
                this.setState({
                    channelData: response,
                });
            })
    }


    render () {
        if (this.state.channelData) {
            return (
                <div className="App">
                    <AppContext.Provider value={this.state}>
                        <SideBar />
                        <Header />
                        <Content />
                    </AppContext.Provider>
                </div>
            );
        } else {
            return  (
                <></>
            );
        }

    }

}

export default App;
