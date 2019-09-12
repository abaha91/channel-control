import React from 'react';
import menu from 'Images/icons/menu.png';
import SettingsBarContext  from 'Context/AppContext/AppContext';


class Header extends React.Component {

    render () {
        return (
            <SettingsBarContext.Consumer>
                {(context: any) => (
                    <header className="App-header">
                        <div className="logo frontend">
                            <img src="" alt=""/>
                        </div>
                        <div className="title">{context.channelData.name}</div>

                        <div className="settings-launcher" onClick={context.setSettingsBarVisibility}>
                            <img className="menuImage" src={menu}/>
                        </div>
                    </header>
                    )
                }
            </SettingsBarContext.Consumer>

        );
    }

}

export default Header;
