import React from 'react';

const SettingsBarContext: any = React.createContext({
    settingsBarVisibility: true,
    setSettingsBarVisibility: () => {}
});

export default SettingsBarContext;
