import { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyField, setEmptyField] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
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

      <label htmlFor="title">Exersize Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyField.includes("title") ? "error" : ""}
      />
      <label htmlFor="load">Load</label>
      <input
        type="number"
        id="load"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyField.includes("load") ? "error" : ""}
      />
      <label htmlFor="reps">Reps</label>
      <input
        type="number"
        id="reps"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyField.includes("reps") ? "error" : ""}
      />
      <button type="button">Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
