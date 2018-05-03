import React from "react"
import { FormContainer } from "../components/Form/FormContainer"
import { Container } from "../components/common/Container"

export class Login extends React.Component {
  render() {
    return (
      <Container maxWidth="480px" paddingTop="3rem">
        <FormContainer />
      </Container>
    )
  }
}
