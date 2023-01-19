import React from 'react'
import { Space, Spin } from 'antd'
import './headerLoader.scss'

const HeaderLoader: React.FC = () => (
  <Space size="large">
    <Spin tip="Билеты загружаются подождите пожалуйста..." />
  </Space>
)

export default HeaderLoader
