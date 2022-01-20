import React, { useState } from 'react'
import Detail from './Detail.jsx'

export default function Feed({
  activities,
  archiveView,
  onClick,
  updateArchive,
}) {
  const [detailId, setDetailId] = useState()

  function handleClick(id) {
    detailId == id ? setDetailId(null) : setDetailId(id)
    onClick && coClick(id)
  }

  function toggleArchive(id, isArchived) {
    updateArchive && updateArchive(id, isArchived)
  }

  return (
    <div className="overflow-y-auto flex-1 flex flex-col px-2 py-4">
      {activities &&
        activities.map(
          (
            {
              id,
              created_at: createdAt,
              direction,
              from,
              to,
              via,
              duration,
              is_archived: isArchived,
              call_type: callType,
            },
            i
          ) => {
            return (
              (archiveView ? isArchived : !isArchived) && (
                <Detail
                  key={i.toString()}
                  id={id}
                  createdAt={createdAt}
                  direction={direction}
                  from={from}
                  to={to}
                  via={via}
                  duration={duration}
                  isArchived={isArchived}
                  callType={callType}
                  expand={detailId == id}
                  onClick={() => handleClick(id)}
                  onArchive={() => toggleArchive(id, !isArchived)}
                />
              )
            )
          }
        )}
    </div>
  )
}
