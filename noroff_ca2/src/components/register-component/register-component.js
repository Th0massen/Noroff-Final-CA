import React from 'react'

const RegisterForm = (props) => {
    return (
        <form>
            <input type="text" placeholder="Give yourself a username" onChange={ props.userInput } />
            <input type="password" placeholder="Provide a password" onChange={ props.passInput }/><br />
            <input type="button" value="Register" onClick={ props.onSubmitClick }/>
            <input type="button" value="Cancel" onClick={ props.handleAbort } />
        </form>
    )
}

export default RegisterForm