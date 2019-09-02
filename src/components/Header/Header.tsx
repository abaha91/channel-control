import React from 'react';
import menu from 'Images/icons/menu.png';
import SettingsBarContext  from 'Context/AppContext/AppContext';


class Header extends React.Component {

    render () {
        return (
            <header className="App-header">
                <div className="logo frontend">
                    <img src="" alt=""/>
                </div>
                <SettingsBarContext.Consumer>
                    {
                        (context: any) => (
                            <div className="settings-launcher" onClick={context.setSettingsBarVisibility}>
                                <img className="menuImage" src={menu}/>
                            </div>
                        )
                    }

                </SettingsBarContext.Consumer>
            </header>
        );
    }

}

export default Header;
