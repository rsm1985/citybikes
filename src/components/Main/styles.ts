import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin: 0 auto;
  height: 90vh;
  width: 100%;
  max-width: 1000px;
  overflow-y: scroll;
  border: 1px solid red;
`
export const StyledTableContainer = styled.div`
  border: 1px solid ${theme.colors.black};
`
export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
