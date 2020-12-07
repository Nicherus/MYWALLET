import React, { createContext, useState } from 'react';

const MainContext = createContext();

export default MainContext;

export function MainProvider(props) {
    const [userData, setUserData] = useState([]);

    return (
        <MainContext.Provider {...props} value={{ userData, setUserData }}>
            {props.children}
        </MainContext.Provider>
);
}
