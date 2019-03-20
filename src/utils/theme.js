import React from 'react'

const ThemeContext = React.createContext({
  theme: 'cool',
})

export class ThemeProvider extends React.Component {
  state = {
    theme: 'cool',
  }

  _changeTheme = theme => {
    this.setState({ theme })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this._changeTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export const ThemeConsumer = ThemeContext.Consumer
