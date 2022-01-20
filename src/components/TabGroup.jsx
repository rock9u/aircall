import React, { useState } from 'react'

const TabGroup = ({ tabs, active, onTabClick }) => {
  return (
    <div className="flex w-64 justify-evenly items-end px-2">
      {tabs.map((tab, key) => {
        return (
          <div
            className={`flex-1 text-base text-center px-4 py-2 cursor-default ${
              tab == active
                ? 'bg-white font-bold underline underline-offset-8 decoration-4'
                : 'bg-slate-100'
            }`}
            onClick={() => onTabClick(tab)}
            key={key}
          >
            {tab}
          </div>
        )
      })}
    </div>
  )
}

export default TabGroup
