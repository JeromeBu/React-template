import React, { Component } from "react"
import { NavBarItem } from "./NavBarItem"
import { Wrapper, Spacer, Logo, ItemsWrapper } from "./components"
import { MenuButton } from "./MenuButton"

export default class NavBar extends Component {
  render() {
    const { items, showMenu, toogleMenu, hideMenu, setWrapperRef } = this.props
    return (
      <React.Fragment>
        <Wrapper innerRef={setWrapperRef}>
          <Logo src="images/logo.svg" alt="logo" />
          <MenuButton showMenu={showMenu} toogleMenu={toogleMenu} />
          {/* <div ref={setWrapperRef}>SALUT LES GROS !</div> */}
          {/* <div ref={setWrapperRef}> */}
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
          {/* </div> */}
        </Wrapper>
        <Spacer className="spacer" />
      </React.Fragment>
    )
  }
}
