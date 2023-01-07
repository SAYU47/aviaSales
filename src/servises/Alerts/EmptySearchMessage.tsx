import React from 'react'
import { Alert, Space } from 'antd'

import './EmptySearchMessage.scss'

const EmptySearchMessage: React.FC = () => (
  <div className="alert-message">
    <h2>По вашему запросу ничего не найдено!</h2>
  </div>
)

export default EmptySearchMessage
