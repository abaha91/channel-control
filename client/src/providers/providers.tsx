import React from 'react';
import {IRegistration} from "Interfaces/IRegistration";


class Provider {

    public register (data: IRegistration) {
        return fetch(`${this.returnServerHostAdress()}/register`, {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
    };

    public fetchChannelData = (data: string) => {
        return fetch(`${this.returnServerHostAdress()}/channel/${data}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())

    };

    private returnServerHostAdress () {
        return 'http://localhost:4000'
    }
}

export default Provider;