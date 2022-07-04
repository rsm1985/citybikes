import React, { memo, FC } from 'react'
import { StyledFavoriteIcon, StyledItemContainer } from './styles'

interface TableItemProps {
  content: string
}

const TableItem: FC<TableItemProps> = ({ content }) => {
  return (
    <StyledItemContainer>
      <div>{content}</div>
      <StyledFavoriteIcon></StyledFavoriteIcon>
    </StyledItemContainer>
  )
}

export default memo(TableItem)
