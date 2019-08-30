import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import SettingsBarContext  from './context/AppContext';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.setIsOpenedSettingsBar = isOpenedSettingsBar => {
            this.setState({
                isOpenedSettingsBar: !isOpenedSettingsBar,
            });
        };

        this.state = {
            isOpenedSettingsBar: true,
            setIsOpenedSettingsBar: this.setIsOpenedSettingsBar,
        };

    }


    render () {
        return (
            <div className="App">
                <SettingsBarContext.Provider value={this.state}>
                    <SideBar />
                </SettingsBarContext.Provider>
                <Header />
                <Content />
            </div>
        );
    }

}

export default App;
