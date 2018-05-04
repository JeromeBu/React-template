import React from "react"
import { FormContainer } from "../components/Form/FormContainer"
import { Container } from "../components/common/Container"

export class Login extends React.Component {
  render() {
    const inputs = [
      {
        title: "Email",
        name: "email",
        placeholder: "yourEmail@gmail.com",
        type: "email",
        col: 12
      },
      {
        title: "Password",
        name: "password",
        placeholder: "your password",
        type: "password",
        col: 12
      }
    ]
    return (
      <Container maxWidth="480px" paddingTop="3rem">
        <FormContainer inputs={inputs} />
      </Container>
    )
  }
}
