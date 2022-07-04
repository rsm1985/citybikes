import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const StyledItemContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ isActive }) => (isActive ? theme.colors.grey200 : theme.colors.white)};
  border-bottom: 1px solid ${theme.colors.black};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey100} !important;
  }
`

export const StyledFavoriteIcon = styled.div``
