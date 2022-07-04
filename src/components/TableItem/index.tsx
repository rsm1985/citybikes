import React, { memo, FC } from 'react'
import { StyledItemContainer, StyledItemText } from './styles'

interface TableItemProps {
  content: string
}

const TableItem: FC<TableItemProps> = ({ content }) => {
  return (
    <StyledItemContainer>
      <StyledItemText>{content}</StyledItemText>
    </StyledItemContainer>
  )
}

export default memo(TableItem)
