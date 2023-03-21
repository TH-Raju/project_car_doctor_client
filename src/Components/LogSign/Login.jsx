import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();

    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt="login" className='w-3/4' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Logn" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car?  <Link to="/signup" className='text-orange-700 underline font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Login;