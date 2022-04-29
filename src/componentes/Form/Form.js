import React,{useState} from 'react';
import Results from '../Results/Results';

const Form = () => {

    const [nombre,setNombre] = useState(""); //se guarda en una var nombre
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    const [hizoSubmit,setHizoSubmit] = useState(false); //por default no ha hecho submit
    const [nombreError, setNombreError] = useState("");
    const [apellidoError,setApellidoError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [confirmError,setConfirmError] = useState(""); 
    const [emailError,setEmailError] = useState("");
    

    const crearUsuario = (e) => {
        e.preventDefault();
        console.log("Nombre:" + nombre+", Apellido " + apellido+" Email: " + email + "password: " + password + "confirm: " + confirm);
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHizoSubmit(true);
    }
    
    const mensaje = () =>{
        if(hizoSubmit){
            return "Gracias por sus datos! Bienvenido";
        } else {
            return "Favor de llenar sus datos";
        }
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
        if(e.target.value.length < 2) {
            setNombreError("El campo de error debe tener al menos dos caracteres!");
        } else {
            setNombreError('');
        }
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
        if(e.target.value.length < 2) {
            setApellidoError("El campo de error debe tener al menos dos caracteres!");
        } else {
            setApellidoError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("El campo debe tener minimo 5 caracteres");
        } else {
            setEmailError('')
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Password min 8 caracteres!');
        } else if(e.target.value !== confirm) {
            setPasswordError("Contraseña y confirm deben coincidir!");
        } else {
            setPasswordError('');
        }
        
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmError('Confirm min 8 caracteres!');
        } else if(e.target.value !== password) {
            setPasswordError("Contraseña y confirm deben coincidir!");
        } else {
            setPasswordError('')
            setConfirmError('');
        }

    }

    return(
        <form onSubmit={crearUsuario}>
            <h2>Formulario</h2>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input className="form-control" onChange={ handleNombre } value={nombre}/>
                {
                    nombreError ?
                    <p style={{color:'red'}}>{ nombreError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input className="form-control" onChange={ handleApellido } value={apellido}/>
                {
                    apellidoError ?
                    <p style={{color:'red'}}>{ apellidoError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input className="form-control" onChange={ handleEmail } value={email}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" onChange={ handlePassword } value={password}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="confirm">Confirm</label>
                <input className="form-control" onChange={ handleConfirm } value={confirm}/>
                {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ''
                }
            </div>
            <input type="submit" className="btn btn-success" value="Crear usuario" />
            {mensaje()}
            
            <div class="container">
                <p>Otra forma:</p>
                <p>Name: {nombre}</p>
            </div>

            <Results nombre={nombre} apellido={apellido} email={email} password={password} confirm={confirm}/>
        </form>
    )
}

export default Form;