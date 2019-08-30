import React from 'react';

const SettingsBarContext: any = React.createContext({
    isOpenedSettingsBar: false,
    setIsOpenedSettingsBar: () => {}
});

export default SettingsBarContext;
