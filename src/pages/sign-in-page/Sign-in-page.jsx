
import { useContext, useState } from "react"
import "./sign-inStyle.css"
import { Link } from "react-router-dom"
import UserContext from '../../contexts/UserContext'


const SignInPage = ()=> {
    const [userLogin,setUserLogin] = useState({})
    const {user} = useContext(UserContext)

const handleChange = (e)=> {
    setUserLogin({...userLogin, [e.target.name]: e.target.value})
}

const handleSubmit=(e)=>{
e.preventDefault()
}


    return (
        <>
       <div className="logo-sign-page">
        <h1>InstaJoke</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" viewBox="0 0 55 50" fill="none">
        <path d="M27.5 44.75C39.3513 44.75 49.125 35.9952 49.125 25C49.125 14.0048 39.3513 5.25 27.5 5.25C15.6487 5.25 5.875 14.0048 5.875 25C5.875 35.9952 15.6487 44.75 27.5 44.75Z" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36.6667 16.6667L18.3333 22.9167" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.3333 16.6667L36.6667 22.9167" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.3333 30.1667C18.3333 29.6953 18.3333 29.4595 18.4798 29.3131C18.6262 29.1667 18.8619 29.1667 19.3333 29.1667H35.6667C36.1381 29.1667 36.3738 29.1667 36.5202 29.3131C36.6667 29.4595 36.6667 29.6953 36.6667 30.1667V31.5833C36.6667 35.3546 36.6667 37.2402 35.4951 38.4117C34.3235 39.5833 32.4379 39.5833 28.6667 39.5833H26.3333C22.5621 39.5833 20.6765 39.5833 19.5049 38.4117C18.3333 37.2402 18.3333 35.3546 18.3333 31.5833V30.1667Z" fill="#33363F"/>
        </svg>
       </div> 
       
       <div >
            <form className="form-container" onSubmit={(e)=>handleSubmit(e,userLogin)}>
                <div className="container-input">
                <label htmlFor="email">Email</label>
                <input className="input-signIn"
                 type="text"
                 name="email"
                 onChange={handleChange}
                 ></input>
                </div>

                <div className="container-input">
                <label htmlFor="password">Password</label>
                <input className="input-signIn" 
                type="password"
                name="password"
                onChange={handleChange}
                ></input>
                <Link to={user.email == userLogin.email ? "/home" : "/"}><button className="btn-signIn">Sign in</button></Link>
                </div>
            </form>
            <div className="container-register">
            <p>Not a member?</p>
            <Link to="/register"><button className="btn-register">Register</button></Link>
            </div>
       </div>
       
       </>
    )
}

export default SignInPage