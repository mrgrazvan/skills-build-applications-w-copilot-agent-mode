import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('users').then(setUsers).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><span>People</span><strong>{users.length}</strong></div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6 col-xl-4" key={user._id || user.email}>
            <article className="profile-tile">
              <div className="avatar">{user.avatar || user.name?.slice(0, 2).toUpperCase()}</div>
              <div><h3>{user.name}</h3><p>{user.email}</p><small>{user.team?.name || 'No team yet'}</small></div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users
