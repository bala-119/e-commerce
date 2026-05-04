import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

function Signup() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    status: "inprogress",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTasks([...tasks, form]);

    setForm({
      name: "",
      status: "inprogress",
    });
  }

  return (
    <div className="container">
      <h2>Task Manager</h2>

      <button onClick={() => navigate("/displayCompleted", { state: tasks })}>
        Completed Tasks
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Task Name"
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((t, i) => (
            <tr key={i}>
              <td>{t.name}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Signup;