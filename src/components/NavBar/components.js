import styled from "styled-components"
// NavBar components

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  color: ${props => props.theme.fontColor}
  font-size: ${props => props.theme.fontSize};
  height: ${props => props.theme.navBarHeight};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.navBarBackgroundColor};

  @media screen and (max-width: ${props => props.theme.tablettesBreakPoint}) {
    position: relative;
    justify-content: space-between;
  }
`

export const ItemsWrapper = styled.ul`
  height: ${props => props.theme.navBarHeight};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.navBarBackgroundColor};

  @media screen and (max-width: ${props => props.theme.tablettesBreakPoint}) {
    /* width: ${props =>
      props.width ? `${props.width / 12 * 100}%` : "100%"}; */
      position: absolute;
      right: 0;
      top: ${props => props.theme.navBarHeight};
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      max-width: 300px;
      background-color: ${props => props.theme.navBarBackgroundColor};
      border-bottom-left-radius: 10px;
      display: ${props => (props.showMenu ? null : "none")};
  }

`

export const Spacer = styled.div`
  width: "100%";
  height: ${props => props.theme.navBarHeight};
  @media screen and (max-width: ${props => props.theme.tablettesBreakPoint}) {
    display: none;
  }
`

export const Logo = styled.img`
  height: 40px;
`
