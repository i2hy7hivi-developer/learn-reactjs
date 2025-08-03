import { useState } from 'react';

export default function ContactUs()
{
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email) {
			setError('Name and email are required.');
			return;
		}

		setError('');

		console.log('Name: ', name);
		console.log('Email: ', email);
		alert(`Submitted: ${name} - ${email}`);
	}

	return (
		<form 
		onSubmit={handleSubmit}
		className='container mt-4'
		>
			<h5>Contact Us</h5>

			{error && <div className="alert alert-danger">{error}</div>}

			<div className='mb-3'>
				<label className='form-label'>Name</label>
				<input
					type='text'
					className='form-control'
					value={name}
					onChange={(e) => setName(e.target.value)}
					/>
			</div>
			<div className='mb-3'>
				<label className='form-label'>Email</label>
				<input
					type='email'
					className='form-control'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
			</div>
			<button type='submit' className='btn btn-success'>Save</button>
		</form>
	)
}