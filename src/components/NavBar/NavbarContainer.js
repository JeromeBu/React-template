import React from "react"
import NavBar from "."

export class NavBarContainer extends React.Component {
  state = {
    showMenu: false
  }

  toogleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  hideMenu = () => {
    this.setState({
      showMenu: false
    })
  }

  render() {
    const infoForItems = [
      { icon: "fas fa-tachometer-alt", title: "dashboard", route: "/" },
      { icon: "fa fa-globe", title: "Carte", route: "/map" },
      { icon: "fas fa-sliders-h", title: "Administration" },
      { icon: "fab fa-gg", title: "BlockChain", disabled: true },
      { icon: "fas fa-sign-out-alt", title: "Déconnexion" },
      { icon: "fas fa-power-off", title: "Login", route: "/login" },
      { title: "Sign Up", route: "/sign_up" }
    ]
    return (
      <NavBar
        items={infoForItems}
        showMenu={this.state.showMenu}
        toogleMenu={this.toogleMenu}
        hideMenu={this.hideMenu}
      />
    )
  }
}
