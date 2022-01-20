import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { getActivities, resetArchives, updateCall } from '../apis/call'
import Feed from '../components/Feed'
import Header from '../components/Header'
import TabGroup from '../components/TabGroup.jsx'

const TABS = ['Feed', 'Archive']
const App = () => {
  const [active, setActive] = useState(TABS[0])
  const [activities, setActivities] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    await updateActivities()
  }, [])

  async function updateActivities() {
    let res = await getActivities()
    setActivities(res)
    setLoading(false)
  }

  async function handleUpdateArchive(id, isArchived) {
    setLoading(true)
    await updateCall(id, isArchived)
    await updateActivities()
  }

  async function handleResetArchived() {
    setLoading(true)
    await resetArchives()
    await updateActivities()
  }

  function renderResetArchived() {
    return (
      <button
        className="text-lg text-bold text-slate-600 flex justify-center items-center"
        onClick={handleResetArchived}
      >
        Reset All Archived
      </button>
    )
  }

  const archiveView = active == 'Archive'
  return (
    <div className="container flex flex-col">
      <Header>
        <TabGroup tabs={TABS} active={active} onTabClick={setActive} />
      </Header>
      {!loading ? (
        <div className="flex flex-col">
          <Feed
            activities={activities}
            archiveView={archiveView}
            updateArchive={handleUpdateArchive}
          />
          {archiveView && renderResetArchived()}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
