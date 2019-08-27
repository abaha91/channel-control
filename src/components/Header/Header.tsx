import React from 'react';
import menu from 'Images/icons/menu.png';

class Header extends React.Component {

    render () {
        return (
            <header className="App-header">
                <div className="logo frontend">
                    <img src="" alt=""/>
                </div>
                <div className="settings-launcher">
                    <img className="menuImage" src={menu}/>
                </div>
            </header>
        );
    }

}

export default Header;
