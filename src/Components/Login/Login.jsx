import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from "react-router-dom";
import ProductShowcase from '../Assets/ProductShowcase.png';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        about: '',
        country: '',
        email: '',
        gender: '',
        picture: null,
        acceptConditions: false
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: fieldValue
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length === 0) {
          // Here you can perform any submission logic
            console.log(formData);
          // Reset form after submission
            setFormData({
                name: '',
                about: '',
                country: '',
                email: '',
                gender: '',
                picture: null,
                acceptConditions: false
            });
            setErrors({});
            navigate("/home");
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = (values) => {
        let errors = {};
        if (!values.name.trim()) {
          errors.name = 'Name is required';
        }
        if (!values.about.trim()) {
          errors.about = 'About yourself is required';
        }
        if (!values.country.trim()) {
          errors.country = 'Country is required';
        }
        if (!values.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email is invalid';
        }
        if (!values.gender) {
          errors.gender = 'Gender is required';
        }
        if (!values.picture) {
          errors.picture = 'Picture is required';
        }
        if (!values.acceptConditions) {
          errors.acceptConditions = 'You must accept the conditions';
        }
        return errors;
    };
    
    return (
        <div className='SignUpContainer'>
            <div className='productShowcase' >
                <img src={ProductShowcase}></img>
            </div>
            <div className='signUpForm' >
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name" className='fieldName'>Name:</label>
                <input 
                    type="text" 
                    placeholder='what should we call you?'
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="input-field"
                    required 
                />
                {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="input-group">
                <label htmlFor="about" className='fieldName'>About yourself:</label>
                <input
                    placeholder='Describe in brief'
                    id="about" 
                    name="about" 
                    value={formData.about} 
                    onChange={handleChange} 
                    className="input-field"
                    required 
                />
                {errors.about && <div className="error">{errors.about}</div>}
            </div>
            <div className="input-group">
                <label htmlFor="country" className='fieldName'>Country:</label>
                <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="input-field"
                    required
                >
                    <option value="">Select Country</option>
                    <option value="IN">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="PK">Pakistan</option>
                    <option value="UK">UK</option>
                </select>
                {errors.country && <div className="error">{errors.country}</div>}
            </div>

            <div className="input-group">
                <label className='fieldName'>Email:</label>
                <input 
                    type="email" placeholder='you@domain.com'
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="input-field"
                    required 
                />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="input-group radio-group">
                <label className='fieldName'>Gender:</label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={formData.gender === 'male'} 
                        onChange={handleChange} 
                    />
                        Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={formData.gender === 'female'} 
                        onChange={handleChange} 
                    />
                        Female
                </label>
                {errors.gender && <div className="error">{errors.gender}</div>}
            </div>
            <div className="input-group">
                <label className='fieldName'>Profile Pic:</label>
                <input 
                    type="file" 
                    name="picture" 
                    accept="image/*" 
                    onChange={handleChange} 
                    className="input-field"  
                />
            {errors.picture && <div className="error">{errors.picture}</div>}
            </div>
            <div className="input-group">
                <label>
                <input 
                    type="checkbox" 
                    name="acceptConditions" 
                    checked={formData.acceptConditions} 
                    onChange={handleChange} 
                    className="conditions"
                    required 
                /> I agree to terms and conditions
                </label>
                {errors.acceptConditions && <div className="error">{errors.acceptConditions}</div>}
            </div>
            <button type="submit" className="submit-btn">Create Account</button>
            </form>
            </div>
        </div>
    );
};

export default Login