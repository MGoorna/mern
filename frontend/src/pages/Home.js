import { useEffect, useContext } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutContext } from "../context/WorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

function Home() {
  const { workouts, dispatch } = useContext(WorkoutContext);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        // setWorkouts(data)
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
