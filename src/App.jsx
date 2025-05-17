import React from 'react'
import './App.css'
import ICONS from './Components/Icons/Icons.jsx'

function App() {

  // No está hecha la lógica de validación del formulario ya que la consigna no lo pide. 
  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Thanks for registering!")
  }

  return (
      <main className='main-container'>
        <div className='registration-form'>
          <div className='title-container'>
            <h1 className='title'>Create an account</h1>
            <h2 className='sub-title'>Enter your information to register</h2>
          </div>
          <div className='form-container'>
            <form onSubmit={handleSubmit} className='form-fields'>
              <div className='full-name-input-container'>
                <div className="input-group">
                  <label htmlFor="firstName" className='label'>
                    First Name
                  </label>
                  <input type="text" id="firstName" placeholder="John" />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName" className='label'>
                    Last Name
                  </label>
                  <input type="text" id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="password" className='label'>
                  Email
                </label>
                <div className='input-password'>
                  <input type="email" id="email" placeholder="john.doe@gmail.com" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="password" className='label'>
                  Phone 
                </label>
                <div className='input-password'>
                  <input type="tel" id="password" placeholder="+1 (555) 000-000" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="password" className='label'>
                  Password 
                </label>
                <div className='input-password'>
                  <input type="password" id="password" placeholder="********" />
                  <i className='icon'><ICONS.eye/></i>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="passwordConfirm" className='label'>
                  Confirm Password 
                </label>
                <div className='input-password'>
                  <input type="password" id="passwordConfirm" placeholder="********" />
                  <i className='icon'><ICONS.eye/></i>
                </div>
              </div>
              <input type="submit" value="Register" className='btn-primary'/>
            </form>
          </div>
        </div>
      </main>
  )
}


export default App
