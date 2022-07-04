import React, { memo, FC } from 'react'
import { StyledFavoriteIcon, StyledItemContainer } from './styles'

interface TableItemProps {
  isActive?: boolean
  id: string
  content: string
  onClick: (id: string) => void
}

const TableItem: FC<TableItemProps> = ({ content, onClick, id, isActive }) => {
  return (
    <StyledItemContainer onClick={() => onClick(id)} isActive={isActive}>
      <div>{content}</div>
      <StyledFavoriteIcon></StyledFavoriteIcon>
    </StyledItemContainer>
  )
}

export default memo(TableItem)
