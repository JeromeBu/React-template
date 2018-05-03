import styled from "styled-components"

export const Button = styled.button`
  font-size: 1.3rem;
  padding: 0.8em;
  min-width: 100px;
  max-width: 200px;
  border-radius: 15px;
  background-color: ${props => (props.cancel ? "#e2e2e2" : "#52b2e5")};

  &:hover {
    opacity: 0.8;
  }
`
