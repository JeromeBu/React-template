import React from "react"
import NavBar from "."

export class NavBarContainer extends React.Component {
  state = {
    showMenu: false
  }

  setWrapperRef = node => {
    this.wrapperRef = node
    console.log("Node in setWrapperRef : ", this.wrapperRef)
  }

  toogleMenu = () => {
    this.setState(
      {
        showMenu: !this.state.showMenu
      },
      () => {
        if (this.state.showMenu) {
          document.addEventListener("mousedown", this.handleClickOutside)
        } else {
          document.removeEventListener("mousedown", this.handleClickOutside)
        }
      }
    )
  }

  hideMenu = () => {
    this.setState(
      {
        showMenu: false
      },
      () => {
        document.removeEventListener("mousedown", this.handleClickOutside)
      }
    )
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.hideMenu()
    }
  }

  render() {
    const infoForItems = [
      { icon: "fas fa-tachometer-alt", title: "dashboard", route: "/" },
      { icon: "fa fa-globe", title: "Carte", route: "/map" },
      { icon: "fas fa-sliders-h", title: "Administration" },
      { icon: "fab fa-gg", title: "BlockChain", disabled: true },
      // { icon: "fas fa-sign-out-alt", title: "Déconnexion" },
      { icon: "fas fa-power-off", title: "Login", route: "/login" },
      { title: "Sign Up", route: "/sign_up" }
    ]

    return (
      <NavBar
        setWrapperRef={this.setWrapperRef}
        items={infoForItems}
        showMenu={this.state.showMenu}
        toogleMenu={this.toogleMenu}
        hideMenu={this.hideMenu}
      />
    )
  }
}
