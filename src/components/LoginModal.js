import React,{useState} from 'react'

export const LoginModal = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: ''
      });
    const [errors, setErrors] = useState({});
    
    const handleChange =(e)=>{
    const{name,value} = e.target;
    setFormData((prev)=>({
        ...prev,[name]:value
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
      
        if (!formData.name.trim()) {
          newErrors.name = "Username is Required";
        }
      
        if (!formData.email.includes('@')) {
          newErrors.email = "Email isn't valid";
        }
      
        if (!formData.phone || formData.phone.length < 10) {
          newErrors.phone = "Valid Phone Number is Required";
        }
      
        if (!formData.date) {
          newErrors.date = "Date of Birth is Required";
        }
      
        return newErrors;
      };

    const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    } else {
    console.log('Form submitted:', formData);
    setErrors({});
    console.log(errors);
    }
}

  return (
    <div>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
        <p>Username:</p>
        <input type="text" name='name' value={formData.name} onChange={handleChange} required/>
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        <p>Email Address:</p>
        <input type="email"name='email' value={formData.email} onChange={handleChange} required/>
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <p>Phone Number:</p>
        <input type="tel" name='phone' value={formData.phone} onChange={handleChange} required/>
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
        <p>Date of Birth:</p>
        <input type="date" name='date' value={formData.date} onChange={handleChange} required/>
        {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
        <br /><br />
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: 'skyblue' }}>
          Submit
        </button> 
        </form>   
    </div>
  )
}
