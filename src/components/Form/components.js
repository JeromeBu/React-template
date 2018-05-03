import styled from "styled-components"
// Form components

export const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border: 2px solid #d1d1d1;
  border-radius: 10px;
`

export const InputBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: flex-end;

  @media screen and (min-width: ${props => props.theme.phonesBreakPoint}) {
    width: ${props => (props.width ? `${props.width / 12 * 100}%` : "100%")};
  }
`

export const Label = styled.label`
  padding: 0.5rem 1rem;
  padding: 0.3rem;
`

export const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: ${props => (props.hasError ? "2px solid red" : "2px solid #d1d1d1")};
  border-radius: 5px;
  padding: 0.3rem;
`

export const Error = styled.div`
  color: red;
  height: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 100%;
  padding: 0.3rem;
`

export const ActionsBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding: 1rem;
`
