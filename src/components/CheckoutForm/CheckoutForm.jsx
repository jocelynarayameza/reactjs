import { useState } from "react"
import classes from './CheckoutForm.module.css'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, telephone, email
        }
console.log(userData)
        onConfirm(userData)
    }
 return (
    <div>
        <form onSubmit={handleConfirm} className="Form"></form>
        
        <label className={classes.label}>Nombre:
        <input className={classes.input} type='text' value={name} onChange={({target}) => setName(target.value)} />
        </label>

        <label className={classes.label}>Telephone:
        <input className={classes.input} type='number' value={telephone} onChange={({target}) => setTelephone(target.value)} />
        </label>

        <label className={classes.label}>Email:
        <input className={classes.input} type="email" value={email} onChange={({target}) => setEmail(target.value)} />
        </label>

        <div className={classes.label}>
            <button type='submit' className={classes.button} onClick={handleConfirm} > Crear orden</button>
        </div>
    </div>
 )
}

export default CheckoutForm