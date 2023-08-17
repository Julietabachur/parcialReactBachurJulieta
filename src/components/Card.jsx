import React from 'react'
import { useState } from 'react'
import { RiAlertFill } from 'react-icons/ri';


const Card = () => {

    const [user, setUser] = useState({
        nombre:"",
        edad:"",
        email:"",
        colorFav:"",
      })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const styleColorFav = {
        backgroundColor: user.colorFav,
        border: '1px solid black',
        borderRadius: '30px',
        padding: '10px 20px',
        margin: '10px'
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        const regEx = /^[\S\w]+/;
        if(user.nombre.length >= 3 && user.nombre.match(regEx) && user.colorFav != ""  && user.email.length >= 6 && user.edad >= 18){
            console.log(user.nombre.match(regEx));
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    } 

    const handleChange = (event) => setUser({...user, nombre: event.target.value})
    console.log(user)

  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
        <form className='border border-2 rounded p-5 mx-5' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label  className="form-label">Nombre:</label>
                <input type="text" className="form-control" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="text" className="form-control" onChange={(event)=>setUser({...user, email: event.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number" className="form-control" onChange={(event)=>setUser({...user, edad: event.target.value})}/>
            </div>            
            <div className="mb-3">
                <label className="form-label">Color favorito (en formato hex):</label>
                <input type="text" className="form-control" onChange={(event)=>setUser({...user, colorFav: event.target.value})}/>
            </div>          
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>

        
        {error && 

            <div className='border border-2 rounded p-5 border-danger mx-5'>
                <RiAlertFill className='text-danger' size={80}/>
                <h6 className='text-danger fs-4'>Por favor chequea que la información sea correcta.</h6>
            </div>
        }

        {show ? 
        <div className='border border-2 rounded p-5 mx-5'>
            <h4>Hola!!</h4>
            <p className='fw-semibold'>Según los datos que nos proporcionaste...</p>
            <p className='fw-semibold'>👉🏻Tu nombre es: {user.nombre.toUpperCase()}</p>
            <p className='fw-semibold'>👉🏻Tu email es: {user.email.toUpperCase()}</p>
            <p className='fw-semibold'>👉🏻Tenes {user.edad} AÑOS</p>
            <p className='fw-semibold'>👉🏻Tu color favorito es: </p>
            <span className='fw-semibold fs-5' style={styleColorFav}> {user.colorFav.toUpperCase()}</span>
        </div>
        : null
        }

    </div>
  )
}

export default Card