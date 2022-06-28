import React, { useState, useContext, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { addEmployee } from '../services/employeeService';

const EmployeeForm = props => {
  
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [empoyeeType, setEmpoyeeType] = useState(0);
  const [ongoing, setOngoing] = useState(false);
  const [timeBasis, setTimeBasis] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // structure form values
    const employeeObj ={
      id: 0,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      residentialAddress: residentialAddress,
      empoyeeType: empoyeeType,
      ongoing: ongoing,
      timeBasis: timeBasis,
    }; 
     
    console.log('Employee: ', employeeObj);

    addEmployee(
      employeeObj,
      succeed,
      failed,
    );

    // reset to default values
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setResidentialAddress('');
    setEmpoyeeType(0);
    setOngoing(false);
    setTimeBasis(0);    
  }

  const succeed = (res) => {
    console.log(res);
    console.log("succeed");
    window.alert("succeed");
  }

  const failed = (res) => {
    console.log(res);
    console.log("failed");
    window.alert("failed");
  }

  const { pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div class="control">
          <Field            
            class="input"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            onChange={event => setFirstName(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label>Middle Name</label>
        <div class="control">
          <Field
            class="input"
            name="middleName"
            component="input"
            type="text"
            placeholder="Middle Name"
            onChange={event => setMiddleName(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div class="control">
          <Field
            class="input"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            onChange={event => setLastName(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            class="input"
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label>Mobile</label>
        <div>
          <Field
            class="input"
            name="mobile"
            component="input"
            type="mobile"
            placeholder="Mobile"
            onChange={event => setMobile(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label>Residential Address</label>
        <div>
          <Field
            class="input"
            name="residentialAddress"
            component="input"
            type="text"
            placeholder="residentialAddress"
            onChange={event => setResidentialAddress(event.target.value)}
          />
        </div>
      </div>
      <div class="content">
        <div class="label">Employee Status</div>
        <label>What is contract type</label>
        <div>
          <label>
            <Field
              class="radio"
              name="empoyeeType"
              component="input"
              type="radio"
              value="0"
              onChange={event => setEmpoyeeType(parseInt(event.target.value))}
            />{' '}
            Permanent
          </label>
        </div>
        <div>
          <label>
            <Field
              class="radio"
              name="empoyeeType"
              component="input"
              type="radio"
              value="1"
              onChange={event => setEmpoyeeType(parseInt(event.target.value))}
            />{' '}
            Contract
          </label>
        </div>
      </div>
      <div class="content">     
        <div>
          {/* TODO: add start date */}
        </div>   
        <div>
          {/* TODO: add finish date */}
        </div>   
        <div class="control">
          <Field
            name="ongoing"
            id="ongoing"
            component="input"
            type="checkbox"
            onChange={event => setOngoing(event.target.checked)}
          />
          <label class="checkbox" htmlFor="ongoing">On going</label>
        </div>
      </div>
      <div class="content">
        <div>
            <label>
              <Field
                name="timeBasis"
                component="input"
                type="radio"
                value="0"
                onChange={event => setTimeBasis(parseInt(event.target.value))}
              />{' '}
              Full-time
            </label>
          </div>
          <div>
            <label>
              <Field
                name="timeBasis"
                component="input"
                type="radio"
                value="1"
                onChange={event => setTimeBasis(parseInt(event.target.value))}
              />{' '}
              Part-time
            </label>
          </div>
        </div>
      <div class="content">
        <button class="button is-link" type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button class="button is-link is-light" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(EmployeeForm)