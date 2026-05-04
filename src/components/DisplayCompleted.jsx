import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./style.css";

function DisplayCompleted() {
  const location = useLocation();
  const navigate = useNavigate();

  const tasks = location.state || [];

  const completedTasks = tasks.filter(
    (t) => t.status === "completed"
  );

  return (
    <div className="container">
      <h2>Completed Tasks</h2>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back
      </button>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {completedTasks.length > 0 ? (
            completedTasks.map((t, i) => (
              <tr key={i}>
                <td>{t.name}</td>
                <td>{t.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No completed tasks</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayCompleted;