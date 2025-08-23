import React, { useState } from 'react';
// import { LoginModal } from './components/LoginModal';

function App() {
  // const [modal, setModal] = useState(true);
  // const handleForm = () => {
  //   setModal(prev => !prev);
  // };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, dob, phone } = formData;

    // Username validation
    if (!username.trim()) {
      alert('Please fill out the Username field.');
      return;
    }

    // Email validation
    if (!email.trim()) {
      alert('Please fill out the Email field.');
      return;
    }
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone validation
    if (!phone.trim()) {
      alert('Please fill out the Phone Number field.');
      return;
    }
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // DOB validation
    if (!dob.trim()) {
      alert('Please fill out the Date of Birth field.');
      return;
    }
    const enteredDate = new Date(dob);
    const today = new Date();
    if (isNaN(enteredDate.getTime()) || enteredDate > today) {
      alert('Invalid date of birth. Please enter a valid past date.');
      return;
    }

    // All validations passed
    setShowModal(false);
    setFormData({ username: '', email: '', dob: '', phone: '' });
  };

  return (
    <div className="app">
    {!showModal && (
    <div className="open-form-wrapper">
      <h1>User Details Modal</h1>
      <button
        className="open-form-button"
        onClick={() => setShowModal(true)}
      >
        Open Form
      </button>
    </div>
  )}

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>

              <label>
                Username:
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </label>
              <br />

              <label>
                Email:
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
              <br />

              <label>
                Date of Birth:
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData({ ...formData, dob: e.target.value })
                  }
                />
              </label>
              <br />

              <label>
                Phone Number:
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </label>
              <br />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// <h1>User Details Modal</h1>
// <button
//   onClick={handleForm}
//   style={{ padding: '10px', borderRadius: '5px', backgroundColor: 'skyBlue' }}>
//   Open Form
// </button>
// {modal && <LoginModal />}