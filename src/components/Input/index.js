import React from "react"
import { Wrapper } from "./components"
import PropTypes from "prop-types"

export class Input extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    return <Wrapper onChange={this.props.handleChange} />
  }
}
