import { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import './loader.scss'

const antIcon = <LoadingOutlined style={{ fontSize: 74 }} spin />

const Loader: FC = () => <Spin indicator={antIcon} />

export default Loader
