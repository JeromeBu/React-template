import React, { Component } from "react"
import { NavBarItem } from "./NavBarItem"
import { Wrapper, Spacer, Logo, ItemsWrapper } from "./components"
import { MenuButton } from "./MenuButton"
import PropTypes from "prop-types"

export default class NavBar extends Component {
  render() {
    const { items, showMenu, toogleMenu, hideMenu } = this.props
    return (
      <React.Fragment>
        <Wrapper>
          <Logo src="images/logo.png" alt="logo" />
          <MenuButton showMenu={showMenu} toogleMenu={toogleMenu} />
          <ItemsWrapper showMenu={showMenu}>
            {items.map(element => {
              return (
                <NavBarItem
                  key={element.title}
                  route={element.route || "#"}
                  icon={element.icon}
                  disabled={element.disabled}
                  hideMenu={hideMenu}
                >
                  {element.title}
                </NavBarItem>
              )
            })}
          </ItemsWrapper>
        </Wrapper>
        <Spacer className="spacer" />
      </React.Fragment>
    )
  }
}
