import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutContext()
  const { user } = useAuthContext();

  const handleCancel = async () => {
    if (!user) return;

    const res = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong> Reps:</strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <button type="button" onClick={handleCancel}>delete</button>

    </div>
  );
}

export default WorkoutDetails;
