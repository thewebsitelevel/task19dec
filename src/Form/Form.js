import React from 'react';

import classes from './Form.module.css';

const form = (props) => {
    return(
        <form onSubmit={props.buildChanged} className={classes.Container} >
            <div className={classes.Header}>
                <p>Build Your Resume</p>
            </div>
            <h2>Personal Details</h2>
            <div className={classes.form}>
                <label>Full Name: </label>
                <input onChange={props.nameChanged} type="text" placeholder="e.g. John Doe" required/><br/>
                <label>Address:</label>
                <input onChange={props.address1Changed} type="text" required placeholder="e.g. P59 6th Street Bay Area" /><br/>
                <label>City:</label>
                <input onChange={props.cityChanged} type="text" placeholder="e.g. Texas" required/>
                <label>ZIP Code:</label>
                <input onChange={props.zipChanged} type="number" placeholder="e.g. 121102" required/>
                <label>Country:</label>
                <input onChange={props.countryChanged} type="text" placeholder="e.g. America" required/><br/>
                <label>Email:</label>
                <input onChange={props.emailChanged} type="email" placeholder="e.g. johndoe@gmail.com" required/>
                <label>Mobile:</label>
                <input onChange={props.mobileChanged} type="number" placeholder="e.g. 123456789" required/><br/>
            </div>
            <h2>Education </h2>
            <div className={classes.form} >
                <label>School Name: </label>
                <input onChange={props.schoolChanged} type="text" placeholder="e.g. Harvard" required/>
                <label>City:</label>
                <input onChange={props.schoolCityChanged} type="text" required placeholder="e.g. San Fracisco" /><br/>
                <label>State:</label>
                <input onChange={props.schoolStateChanged} type="text" placeholder="e.g. California" required/>
                <label>Degree:</label>
                <input onChange={props.degreeChanged} type="text" placeholder="e.g. B.tech" required/><br/>
                <label>Specilization:</label>
                <input onChange={props.specilizationChanged} type="text" placeholder="e.g. Computer Engineering" required/>
                <label>Graduation Date:</label>
                <input onChange={props.dateChanged} type="date" placeholder="e.g. 1/06/2021" required/><br/>
                
            </div>
            <h2>Experience </h2>
            <div className={classes.form} >
                <label>Company Name:</label>
                <input onChange={props.companynameChanged} type="text" placeholder="e.g. Computer Engineering" />
                <label>Start Date:</label>
                <input onChange={props.startDateChanged} type="date" placeholder="e.g. 1/06/2021" />
                <label>End Date:</label>
                <input onChange={props.endDateChanged} type="date" placeholder="e.g. 1/06/2021" /><br/>
                </div>

            <h2>Skills and Projects </h2>
            <div className={classes.form} >
                <label>Skills: </label><br/>
                <textarea onChange={props.skillChanged} placeholder="HTML, CSS, Javascript, Python" required ></textarea><br/>
                <label>Projects: </label><br/>
                <textarea onChange={props.projectChanged} placeholder="Build a Resume Builder which can export candidate details to excel file" ></textarea>
            </div>
            <button  type="submit" >Build</button>
        </form>
    )
}

export default form;