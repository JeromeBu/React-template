import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Dashboard } from "./views/Dashboard"
import { Login } from "./views/Login"
import { SignUp } from "./views/SignUp"
import { MapView } from "./views/MapView"
import { NavBarContainer } from "./components/NavBar/NavbarContainer"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "./themes"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Router>
          <div>
            <NavBarContainer />
            <React.Fragment>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/sign_up" component={SignUp} />
              <Route path="/map" component={MapView} />
            </React.Fragment>
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
