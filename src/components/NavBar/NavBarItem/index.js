import React from "react"
import { Link } from "react-router-dom"
import { Wrapper } from "./components"
import PropTypes from "prop-types"

// export const NavBarItem = props => (
export class NavBarItem extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node,
    route: PropTypes.string,
    hideMenu: PropTypes.func,
    disabled: PropTypes.bool
  }
  render() {
    const { disabled, route, icon, hideMenu, children } = this.props
    return (
      <Wrapper disabled={disabled} onClick={hideMenu}>
        <Link to={route}>
          {icon && <i className={icon} />} {children}
        </Link>
      </Wrapper>
    )
  }
}
