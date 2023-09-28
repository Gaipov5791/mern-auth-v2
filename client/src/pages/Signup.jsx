import { useState } from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		setFormData({...formData, [e.target.id]: e.target.value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/auth/signup", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.error(err.message);
			
		}
	};

	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input 
					type="text" 
					placeholder="username" 
					id="username" 
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input 
					type="text" 
					placeholder="email" 
					id="email" 
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input 
					type="password" 
					placeholder="password" 
					id="password" 
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<button className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
			</form>
			<div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to='/sign-in' className="text-blue-500">Sign In</Link>
			</div>
		</div>
	)
}

export default Signup;