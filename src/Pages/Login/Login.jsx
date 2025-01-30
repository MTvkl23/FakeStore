import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { BsLockFill } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios';
import { setUsername } from '../../store';
import { useDispatch } from 'react-redux';

function Login() {
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [loginError, setLoginError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onUsernameInputChange = (event) => {
        setLoginData({ ...loginData, username: event.target.value });
    };

    const onPasswordInputChange = (event) => {
        setLoginData({ ...loginData, password: event.target.value });
    };

    const onSubmitClick = async (event) => {
        event.preventDefault();
        await axios.post("https://fakestoreapi.com/auth/login", { ...loginData })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    alert(`Welcome to FAKESTORE, dear ${loginData.username}!`);
                    dispatch(setUsername(loginData.username));
                    navigate("/");
                }
                else {
                    setLoginError("Username or password is incorrect!");
                }
            })
            .catch((err) => {
                console.error(err);
                setLoginError("Username or password is incorrect!");
            })

    };

    return (
        <div className="login">
            <form className="login-window">
                <h2 className="login-title">Login</h2>
                <label className="login-label"><span className="login-label-icon"><FaUser /></span><span>Username</span></label>
                <input onChange={onUsernameInputChange} type="text" className="login-input" maxLength="30" name="username" />
                <label className="login-label"><span className="login-label-icon"><BsLockFill /></span><span>Password</span></label>
                <input onChange={onPasswordInputChange} type="text" className="login-input" maxLength="30" name="password" />
                <p className="login-forgot-password"><Link className="link">Forgot password?</Link></p>
                <p className="login-error">{loginError}</p>
                <button onClick={onSubmitClick} className="login-submit"><Link className="link" to="#">Submit</Link></button>
            </form>
        </div>
    )
}

export default Login;