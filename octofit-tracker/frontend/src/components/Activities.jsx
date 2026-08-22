import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('activities').then(setActivities).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><span>Recent activity</span><strong>{activities.length}</strong></div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="table-responsive">
        <table className="table align-middle activity-table"><thead><tr><th>Activity</th><th>Duration</th><th>Points</th><th>Date</th></tr></thead>
          <tbody>{activities.map((activity) => <tr key={activity._id || `${activity.type}-${activity.completedAt}`}><td><strong>{activity.type}</strong><small>{activity.user?.name || 'OctoFit member'}</small></td><td>{activity.durationMinutes} min</td><td className="points">+{activity.points}</td><td>{activity.completedAt ? new Date(activity.completedAt).toLocaleDateString() : '-'}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  )
}

export default Activities
