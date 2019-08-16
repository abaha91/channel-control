import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {

    render () {
        return (
            <aside className="main-settings-bar">
                <div className="channelName">Frontender's notes</div>
                <div className="channelName">Big data | Machine learning</div>
            </aside>
        );
    }

}

export default SideBar;
