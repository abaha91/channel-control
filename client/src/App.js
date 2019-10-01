import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import Provider  from 'Provider/providers';
import AppContext  from 'Context/AppContext/AppContext';
import cryptoProApi from 'cadesplugin-crypto-pro-api';



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
            });

        const list = cryptoProApi.then(data => data.getCert('5B6FFA9DA3AC03EBD389390B6BE2EB10FC69BFB6'));
        list.then((data) => console.log(data));
    }




    render () {
        console.log(1, cryptoProApi);
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
