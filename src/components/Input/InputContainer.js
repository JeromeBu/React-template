import React from "react"
import { Input } from "."

export class InputContainer extends React.Component {
  state = {
    value: ""
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    console.log("RENDERED inputContainer, value : ", this.state.value)
    const { value } = this.state
    return <Input value={value} handleChange={this.handleChange} />
  }
}
