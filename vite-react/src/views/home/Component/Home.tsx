import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return <div>我是home页</div>
}

export default memo(Home)
