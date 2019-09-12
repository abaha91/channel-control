import React from 'react';
import './SideBar.css';
import SettingsBarContext from 'Context/AppContext/AppContext';

class SideBar extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
    }

    render () {
        return (
            <SettingsBarContext.Consumer>
                {(context: any) => (
                        <aside className={"main-settings-bar " + (context.settingsBarVisibility ? 'opened' : '')}>
                            <div className="channelName">Frontender's notes</div>
                            <div className="channelName">Big data | Machine learning</div>
                        </aside>
                    )}
            </SettingsBarContext.Consumer>
        );
    }

}

export default SideBar;
