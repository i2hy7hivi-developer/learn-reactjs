import { useState, useEffect } from "react";

function Task()
{
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const saved = localStorage.getItem('tasks');
		if (saved) {
			try {
				setTasks(JSON.parse(saved));
			} catch (e) {
				console.error('Failed to parse tasks:', e);
			}
		}
	}, []);

	useEffect(() => {
		if (tasks.length > 0) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}, [tasks]);

	const handleAdd = () => {
		if (task.trim !== '') return;
		setTasks([...tasks, task]);
		setTask('');
	}

	const handleDelete = (index) => {
		const updated = tasks.filter((_, i) => i !== index);

		setTasks(updated);
	}

	return (
		<div className="container mt-5">
			<h2 className="mb-4">Tasks</h2>
			<input
				type="text"
				className="form-control"
				value={task}
				placeholder="Enter Task"
				onChange={(e) => setTask(e.target.value)}
			/>
			<button
				className="btn btn-primary"
				onClick={handleAdd}
				>
					Add Task
			</button>

			<ul>
				{
					tasks.length === 0 ?
					(
						<p>No tasks yet.</p>
					) :
					(
						tasks.map((t, i) => (
							<li
								className="list-group-item d-flex justify-content-between align-items-center my-2"
								key={i}>
								{t}
								<button
									className="btn btn-sm btn-outline-danger"
									onClick={() => handleDelete(i)}>Delete</button>
							</li>
						))
					)
				}
			</ul>
		</div>
	)
}

export default Task;