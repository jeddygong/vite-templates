import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { useSelector } from 'react-redux'

interface IProps {
  children?: ReactNode
}
interface RootState {
  name: string
  // 其他属性...
}

const Home: FC<IProps> = () => {
  const data = useSelector((state: RootState) => state.name) // 替换为您的状态属性路径

  return (
    <div>
      我是home页
      <div>{data}</div>
    </div>
  )
}

export default memo(Home)
