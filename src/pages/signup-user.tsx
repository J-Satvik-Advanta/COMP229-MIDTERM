import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpUser: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();
  const onSubmit = (formData: SignUpFormData) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(JSON.stringify(formData, null, 2));
    console.log('formData',formData);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Sign Up User</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3 text-start">
              <label className="form-label">First Name:<span className="text-danger">*</span></label>
              <input {...register("firstName", { required: "First Name is required" })} className="form-control mb-1" placeholder="Enter your first name" />
              {errors.firstName && <span className="text-danger ms-1">{errors.firstName.message}</span>}
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Last Name:<span className="text-danger">*</span></label>
              <input {...register("lastName", { required: "Last Name is required" })} className="form-control mb-1" placeholder="Enter your last name" />
              {errors.lastName && <span className="text-danger ms-1">{errors.lastName.message}</span>}
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Username:<span className="text-danger">*</span></label>
              <input {...register("userName", { required: "Username is required" })} className="form-control mb-1" placeholder="Enter your username" />
              {errors.userName && <span className="text-danger ms-1">{errors.userName.message}</span>}
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Email:<span className="text-danger">*</span></label>
              <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} className="form-control mb-1" placeholder="Enter your email" />
              {errors.email && <span className="text-danger ms-1">{errors.email.message}</span>}
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Password:<span className="text-danger">*</span></label>
              <input type="password" {...register("password", { required: "Password is required" })} className="form-control mb-1" placeholder="Enter your password" />
              {errors.password && <span className="text-danger ms-1">{errors.password.message}</span>}
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Confirm Password:<span className="text-danger">*</span></label>
              <input type="password" {...register("confirmPassword", { required: "Confirm Password is required" })} className="form-control mb-1" placeholder="Confirm your password" />
              {errors.confirmPassword && <span className="text-danger ms-1">{errors.confirmPassword.message}</span>}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
