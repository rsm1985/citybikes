import React, { memo, FC } from 'react'
import { StyledFavoriteIcon, StyledItemContainer } from './styles'
import LikeIcon from '../icons/Like'

interface TableItemProps {
  isActive?: boolean
  id: string | number
  content: string
  onClick: (id: string | number) => void
  liked?: boolean
  isShowLikeIcon?: boolean
}

const TableItem: FC<TableItemProps> = ({
  content,
  onClick,
  id,
  isActive,
  isShowLikeIcon,
  liked,
}) => {
  return (
    <StyledItemContainer onClick={() => onClick(id)} isActive={isActive}>
      <div>{content}</div>
      {isShowLikeIcon && (
        <StyledFavoriteIcon>
          <LikeIcon liked={liked} />
        </StyledFavoriteIcon>
      )}
    </StyledItemContainer>
  )
}

export default memo(TableItem)
