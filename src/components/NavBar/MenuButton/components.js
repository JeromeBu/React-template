import styled from "styled-components"
// MenuButton components

export const Wrapper = styled.li`
  font-size: 1.2em;
  color: ${props => props.theme.fontColor};
  max-width: 150px;
  text-align: right;
  padding: 0 20px;
  line-height: ${props => props.theme.navBarHeight};
  height: ${props => props.theme.navBarHeight};

  &:hover {
    color: ${props => props.theme.linkHoverColor};
    cursor: pointer;
  }

  /* .hidden {
    visibility: hidden;
  } */

  @media screen and (min-width: ${props => props.theme.tablettesBreakPoint}) {
    display: none;
  }
`
