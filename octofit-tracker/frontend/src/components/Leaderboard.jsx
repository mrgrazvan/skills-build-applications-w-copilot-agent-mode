import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('leaderboard').then(setEntries).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><span>Leaderboard</span><strong>Weekly</strong></div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="leaderboard-list">{entries.map((entry) => <article className="leader-row" key={entry._id || entry.rank}><span className="rank">{String(entry.rank).padStart(2, '0')}</span><div><h3>{entry.user?.name || 'OctoFit member'}</h3><p>{entry.team?.name || 'Independent'}</p></div><strong className="points">{entry.points} pts</strong></article>)}</div>
    </section>
  )
}

export default Leaderboard
