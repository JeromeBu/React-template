import styled from "styled-components"

export const Container = styled.div`
  max-width: ${props => props.maxWidth || "768px"};
  padding-top: ${props => props.paddingTop || "0"};
  display: ${props => (props.flex ? "flex" : "block")};
  margin: auto;
  background-color: ${props => props.backgroundColor};
`
