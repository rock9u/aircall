import React from 'react'
import Icon from './Icon.jsx'

const Header = ({ children }) => {
  return (
    <div className="flex pt-2  bg-slate-100">
      <div className="flex w-32 p-2">
        <Icon />
      </div>
      {children}
    </div>
  )
}

export default Header
