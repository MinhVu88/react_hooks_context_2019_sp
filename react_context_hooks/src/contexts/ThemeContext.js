import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    // the state is the globally shared data between various components
    state = {
        isLightTheme: true,
        light_theme: {text: '#555', background: '#ddd', other_ui: '#eee'},
        dark_theme: {text: '#ddd', background: '#555', other_ui: '#333'}
    };

    toggleTheme = () => {
        this.setState((prevState, props) => {
          return {isLightTheme: !prevState.isLightTheme};
        });
    };

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    };
};
