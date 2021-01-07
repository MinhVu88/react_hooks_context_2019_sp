import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthenticationContextProvider extends Component {
    state = {isAuthenticated: false};

    toggleAuth = () => {
        this.setState((preState, props) => {
            return {isAuthenticated: !preState.isAuthenticated};
        });
    };

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    };
};
