import { useEffect, useContext } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutContext } from "../context/WorkoutContext";

function Home() {
  /* const [workouts, setWorkouts] = useState(null) */
  const { workouts, dispatch } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();
      if (res.ok) {
        // setWorkouts(data)
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    fetchWorkouts();
  }, [dispatch, workouts]);

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
