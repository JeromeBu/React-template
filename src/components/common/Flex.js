import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  width: ${props => props.width || ""};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  border: ${props => props.border || ""};
  border-radius: ${props => props.borderRadius || "0"};
  background-color: ${props => props.backgroundColor || ""};
  justify-content: ${props => props.justifyContent || "flex-start"};
  flex-direction: ${props => props.flexDirection || "row"};
  flex-wrap: ${props => props.flexWrap || "nowrap"};
  flex-flow: ${props => props.flexFlow || "flex-start"};
  align-items: ${props => props.flexFlow || "flex-start"};
  align-content: ${props => props.alignContent || "flex-start"};
`
