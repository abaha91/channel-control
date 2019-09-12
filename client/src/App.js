import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import SettingsBarContext  from 'Context/AppContext/AppContext';


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
        };

    }


    render () {
        return (
            <div className="App">
                <SettingsBarContext.Provider value={this.state}>
                    <SideBar />
                </SettingsBarContext.Provider>
                <SettingsBarContext.Provider value={this.state}>
                    <Header />
                </SettingsBarContext.Provider>
                <Content />
            </div>
        );
    }

}

export default App;
