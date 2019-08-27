import React from 'react';
import './SideBar.css';

class SideBar extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            settingsIsOpened: true,
        }
    }

    render () {
        return (
            <aside className={"main-settings-bar " + (this.state.settingsIsOpened && 'opened')}>
                <div className="channelName">Frontender's notes</div>
                <div className="channelName">Big data | Machine learning</div>
            </aside>
        );
    }

}

export default SideBar;
