import React from 'react'
export default function SimpleCard({ direction, from, to, callType, onClick }) {
  return (
    <div
      className="flex flex-row items-center cursor-pointer h-16 rounded-lg bg-slate-100 px-6 my-1 text-center"
      onClick={onClick}
    >
      <div className="flex-none ">{direction}</div>
      <div className="flex-col grow">
        <div className="text-base text-bold">{from}</div>
        <div className="text-xs text-thin text text-slate-400">{to}</div>
      </div>
      <div className="flex-none ">{callType}</div>
    </div>
  )
}
