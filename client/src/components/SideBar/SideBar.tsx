import React from 'react';
import './SideBar.css';
import AppContext from 'Context/AppContext/AppContext';

class SideBar extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
    }

    render () {
        return (
            <AppContext.Consumer>
                {(context: any) => (
                        <aside className={"main-settings-bar " + (context.settingsBarVisibility ? 'opened' : '')}>
                            { context.isAuth ?
                                <React.Fragment>
                                    <div className="channelName">Frontender's notes</div>
                                    <div className="channelName">Big data | Machine learning</div>
                                </React.Fragment> :
                                <React.Fragment>
                                    <span className="auth-link" onClick={context.setIsLoginProcess}>Вход</span>
                                    <span className="auth-link" onClick={context.setIsRegistrationProcess}>Регистрация</span>
                                </React.Fragment>
                            }

                        </aside>
                    )}
            </AppContext.Consumer>
        );
    }

}

export default SideBar;
