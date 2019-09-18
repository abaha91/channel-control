import React from 'react';

const AppContext: any = React.createContext({
    isAuth: false,
    isRegistrationProcess: false,
    isLoginProcess: false,
    settingsBarVisibility: false,
    channelData: undefined,
    setSettingsBarVisibility: () => {},
    setIsLoginProcess: () => {},
    setIsRegistrationProcess: () => {},
});

export default AppContext;
