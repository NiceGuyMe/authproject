import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router";
import {auth, facebookLogin, githubLogin, logInWithEmailAndPassword, signInWithGoogle} from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/welcome");
    }, [user, loading, navigate]);
    return (
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" value={email}
                                       onChange={(e) => setEmail(e.target.value)} placeholder="User name / Email"></input>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" value={password}
                                       onChange={(e) => setPassword(e.target.value)} className="login__input" placeholder="Password"></input>
                            </div>
                            <button className="button login__submit" onClick={() => logInWithEmailAndPassword(email, password)}>
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a onClick={githubLogin} className="social-login__icon fab fa-github"></a>
                                <a onClick={facebookLogin} className="social-login__icon fab fa-facebook"></a>
                                <a onClick={signInWithGoogle} className="social-login__icon fab fa-google"></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
    );
}
export default Login;
