import { useForm } from 'react-hook-form';

function Register() {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = (data) => {
  alert(`Submitted: ${data.name} - ${data.email}`);
};

return (
  <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
    <h3>React Hook Form</h3>

    <div className="mb-3">
      <label>Name:</label>
      <input
        className="form-control"
        {...register('name', { required: 'First Name is required' })}
      />
      {errors.name && <div className="text-danger">{errors.name.message}</div>}
    </div>

    <div className="mb-3">
      <label>Email:</label>
      <input
        className="form-control"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <div className="text-danger">{errors.email.message}</div>}
    </div>

    <button className="btn btn-primary" type="submit">Submit</button>
  </form>
);
}

export default Register;