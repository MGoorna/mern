import { useState, useId } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyField, setEmptyField] = useState([]); 
  const id = useId();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log('user',user)
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyField(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyField([]);
      console.log("new workout added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label htmlFor={`${id}-title`}>Exersize Title</label>
      <input
        type="text"
        id={`${id}-title`}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyField.includes("title") ? "error" : ""}
      />
      <label htmlFor={`${id}-load`}>Load</label>
      <input
        type="number"
        id={`${id}-load`}
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyField.includes("load") ? "error" : ""}
      />
      <label htmlFor={`${id}-reps`}>Reps</label>
      <input
        type="number"
        id={`${id}-reps`}
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyField.includes("reps") ? "error" : ""}
      />
      <button type="submit">Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
