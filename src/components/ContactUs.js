import { useState } from 'react';

export default function ContactUs()
{
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		let newErrors = {};

		if (!name.trim()) {
			newErrors.name = 'Name is required.';
		}

		if (!email.trim()) {
			newErrors.email = 'Email is required.';
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			console.log('Name: ', name);
			console.log('Email: ', email);
			alert(`Submitted: ${name} - ${email}`);
		}
	}

	return (
		<form 
		onSubmit={handleSubmit}
		className='container mt-4'
		>
			<h5>Contact Us</h5>

			<div className='mb-3'>
				<label className='form-label'>Name</label>
				<input
					type='text'
					className={`form-control ${errors.name && 'is-invalid'}`}
					value={name}
					onChange={(e) => setName(e.target.value)}
					/>
			</div>
			<div className='mb-3'>
				<label className='form-label'>Email</label>
				<input
					type='email'
					className={`form-control ${errors.name && 'is-invalid'}`}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
			</div>
			<button type='submit' className='btn btn-success'>Save</button>
		</form>
	)
}