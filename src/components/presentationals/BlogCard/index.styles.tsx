import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const BlogCardWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;

  :hover {
    opacity: 0.7;

    & a > img {
      transform: scale(1.05);
      transition: 0.3s all;
    }
  }

  & a {
    text-decoration: none;

    & img {
      width: 100%;
      height: 100%;
      aspect-ratio: auto;
    }
  }
`

export const ContentWrapper = styled.div`
  margin-top: ${SIZE.SPACE.X16};
`

export const Title = styled.h2`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${SIZE.FONT.X16};
  font-weight: bold;
`

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${SIZE.SPACE.X8};
`

export const Date = styled.time`
  margin-left: ${SIZE.SPACE.X4};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${SIZE.FONT.X10};
`
