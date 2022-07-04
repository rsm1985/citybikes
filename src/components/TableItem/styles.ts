import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.black};
`
export const StyledItemText = styled.div`
  font-weight: bold;
`
