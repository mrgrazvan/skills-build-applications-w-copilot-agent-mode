import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('teams').then(setTeams).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><span>Teams</span><strong>{teams.length}</strong></div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id || team.name}>
            <article className="team-tile" style={{ '--team-color': team.color || '#167d8d' }}>
              <div className="team-mark">{team.name?.slice(0, 1)}</div>
              <div><h3>{team.name}</h3><p>{team.motto}</p></div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teams
