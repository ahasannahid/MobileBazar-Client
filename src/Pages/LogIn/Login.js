import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [logInError, setLogInError] = useState('');
    const [loginUseEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSIgnIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('User Login SUccessfully')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleLogin = data => {
        console.log(data);
        setLogInError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                toast.success('User Login SUccessfully')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setLogInError(error.message);
            })
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must 6 character or longer' },
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {
                            logInError && <p className='text-red-600'>{logInError}</p>
                        }
                    </div>
                </form>

                <Link className='text-center'>
                    <button onClick={handleGoogleSIgnIn} className="btn btn-info w-full mt-10"><FaGoogle className='mr-2'></FaGoogle> Google SignIn</button>
                </Link>

                <p>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;