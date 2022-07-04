import React, { memo, FC } from 'react'
import { StyledFavoriteIcon, StyledItemContainer } from './styles'

interface TableItemProps {
  id: string
  content: string
  onClick: (id: string) => void
}

const TableItem: FC<TableItemProps> = ({ content, onClick, id }) => {
  return (
    <StyledItemContainer onClick={() => onClick(id)}>
      <div>{content}</div>
      <StyledFavoriteIcon></StyledFavoriteIcon>
    </StyledItemContainer>
  )
}

export default memo(TableItem)
