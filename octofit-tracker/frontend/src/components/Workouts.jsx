import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('workouts').then(setWorkouts).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><span>Workout library</span><strong>{workouts.length} plans</strong></div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="row g-3">{workouts.map((workout) => <div className="col-md-6" key={workout._id || workout.title}><article className="workout-tile"><div className="workout-top"><span>{workout.category}</span><span>{workout.durationMinutes} min</span></div><h3>{workout.title}</h3><p>{workout.difficulty}</p><div className="exercise-list">{(workout.exercises || []).map((exercise) => <span key={exercise}>{exercise}</span>)}</div></article></div>)}</div>
    </section>
  )
}

export default Workouts
