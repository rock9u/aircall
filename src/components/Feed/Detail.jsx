import React from 'react'
import { resetArchives } from '../../apis/call.js'
import SimpleCard from './SimpleCard.jsx'
const Detail = ({
  id,
  createdAt,
  direction,
  from,
  to,
  via,
  duration,
  callType,
  isArchived,
  expand,
  onClick,
  onArchive,
}) => {
  const detailMap = [
    {
      label: 'Created At',
      value: createdAt && createdAt.replace(/\..{3}Z/, '').replace('T', ' '),
    },
    {
      label: 'Via',
      value: via,
    },
    {
      label: 'Duration',
      value: duration,
    },
  ]
  return (
    <div className="flex flex-col justify-start" key={id}>
      <SimpleCard
        direction={direction}
        from={from}
        to={to}
        callType={callType}
        onClick={onClick}
      />
      {expand && (
        <div className="flex px-4  pb-2 basis-6/7 flex-row justify-between bg-slate-300 round-lg grow">
          <div className="flex-col grow">
            {detailMap.map(({ label, value }, i) => (
              <DetailRow label={label} value={value} key={i.toString()} />
            ))}
          </div>
          <button
            className="flex-none basis-1/7 font-24 text-base"
            onClick={onArchive}
          >
            {isArchived ? 'Unarchive' : 'Archive'}
          </button>
        </div>
      )}
    </div>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="flex  flex-row pt-2 justify-items-start">
      <div className="basis-1/3">{label}</div>
      <div className="px-2">{':'}</div>
      <div className="basis-2/3">{value}</div>
    </div>
  )
}
export default Detail
