import React from "react"
import PropTypes from "prop-types"
// import { Button } from "../common/Button"
// import { Flex } from "../common/Flex"
import { Formik } from "formik"
import { validationSchema } from "./formValidationSchema"
import {
  Wrapper,
  Label,
  Input,
  InputBlock,
  Error,
  ActionsBlock
} from "./components"
import { Button } from "../common/Button"

export class Form extends React.Component {
  static propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.shape({
      validate: PropTypes.string.isRequired,
      cancel: PropTypes.string
    })
  }

  render() {
    return (
      <Formik
        initialValues={{ code: "", street_address: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log("SUBMITING")
          // setTimeout(() => {
          //   console.log("ON SUBMIT")
          //   alert(JSON.stringify(values, null, 2))
          //   actions.setSubmitting(false)
          // }, 1000)
        }}
        render={({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        }) => {
          const inputs = this.props.inputs.map(input => {
            return (
              <InputBlock key={input.name} width={input.col}>
                <Label htmlFor={input.name} style={{ display: "block" }}>
                  {input.title}
                </Label>
                <Input
                  id={input.name}
                  placeholder={input.placeholder}
                  type={input.type || "text"}
                  value={values[input.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  hasError={errors[input.name] && touched[input.name]}
                />
                <Error>
                  {errors[input.name] &&
                    touched[input.name] &&
                    errors[input.name]}
                </Error>
              </InputBlock>
            )
          })

          return (
            <Wrapper onSubmit={handleSubmit}>
              {inputs}
              <ActionsBlock>
                <Button type="submit">{this.props.actions.validate}</Button>
              </ActionsBlock>
            </Wrapper>
          )
        }}
      />
    )
  }
}
