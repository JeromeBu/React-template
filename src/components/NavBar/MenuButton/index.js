import React from "react"
import { Wrapper } from "./components"
import PropTypes from "prop-types"
// import FontAwesome from "react-fontawesome"

export class MenuButton extends React.Component {
  static propTypes = {
    showMenu: PropTypes.bool,
    toogleMenu: PropTypes.func
  }

  render() {
    const { showMenu, toogleMenu } = this.props
    console.log("RENDER MenuButton, showMenu : ", showMenu)

    return (
      <Wrapper onClick={toogleMenu}>
        {showMenu ? (
          <div>
            <i className="fas fa-caret-right" />
            <p>Hide Menu</p>
          </div>
        ) : (
          <div>
            {/* <FontAwesome name="fas fa-bars" /> */}
            <i className="fas fa-bars" />
            {/* <p>Show Menu</p> */}
          </div>
        )}
      </Wrapper>
    )
  }
}
