import React from 'react';

const AppContext: any = React.createContext({
    settingsBarVisibility: true,
    setSettingsBarVisibility: () => {}
});

export default AppContext;
