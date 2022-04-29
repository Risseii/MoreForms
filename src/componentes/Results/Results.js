import React,{useState} from 'react';

const Results = (data) => {

    const{nombre,apellido,email,password,confirm} = data;

    return(
        <div>
            <h3>Your form data</h3>
            <p>First name: {nombre} </p>
            <p>Last name: {apellido} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm: {confirm} </p>
        </div>

    )
}

export default Results;