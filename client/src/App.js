import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import AppContext  from 'Context/AppContext/AppContext';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.setSettingsBarVisibility = () => {
            this.setState({
                settingsBarVisibility: !this.state.settingsBarVisibility,
            });
        };

        this.state = {
            settingsBarVisibility: false,
            setSettingsBarVisibility: this.setSettingsBarVisibility,
            channelData: undefined,
        };

    }

    componentDidMount() {
        fetch('http://localhost:4300/channel/5d6e78dcb9a0e4279cd3334d')
            .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response;
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    channelData: response,
                });
            })
    }


    render () {
        const channelData = this.state.channelData;

        if (this.state.channelData) {
            return (
                <div className="App">
                    <AppContext.Provider value={this.state}>
                        <SideBar />
                    </AppContext.Provider>
                    <AppContext.Provider value={this.state}>
                        <Header />
                    </AppContext.Provider>
                    <Content />
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
