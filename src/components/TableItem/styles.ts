import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.black};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey};
  }
`

export const StyledFavoriteIcon = styled.div``
