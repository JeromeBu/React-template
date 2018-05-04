import React from "react"
import { Form } from "."
import PropTypes from "prop-types"

export class FormContainer extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    overwriteInputs: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    loading: true,
    inputs: [],
    inputValues: {}
  }

  componentDidMount = () => {
    const { url, inputs } = this.props
    if (inputs) {
      this.setState({
        inputs: inputs,
        loading: false
      })
    } else {
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(json => {
          console.log("Data fetched : ", json)
          this.setState({
            inputs: json,
            loading: false
          })
        })
    }
  }

  // const title = "Le titre du formulaire"
  // const validateLabel = "Envoyer"
  // const cancelable = true
  // const fields = [
  //   { id: "001", label: "Prénom" },
  //   { id: "002", label: "Nom" },
  //   { id: "003", label: "BlaBla" }
  // ]

  render() {
    const actions = {
      validate: "Envoyer le formulaire"
    }
    if (this.state.loading === true) {
      return <p>Chargement du formulaire ...</p>
    } else {
      return <Form inputs={this.state.inputs} actions={actions} />
    }
  }
}
