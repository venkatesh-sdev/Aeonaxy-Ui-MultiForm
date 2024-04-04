/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import signup_3d from '/images/signup_3d.png';

import { FaExclamationCircle } from "react-icons/fa";

const SignUpPage = () => {

    const [formValidationMessage, setFormValidationMessage] = useState([]);

    const [validation, setValidation] = useState({
        name: false,
        userName: false,
        email: false,
        password: false,
    });


    const nameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const termsRef = useRef();

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    const navigateToCreateProfilePage = () => {
        navigate('/createprofile');
    }

    const formValidation = () => {
        return true
        // setFormValidationMessage([]);
        // setValidation({
        //     name: false,
        //     userName: false,
        //     email: false,
        //     password: false,
        // });

        // if (nameRef.current.value === '') {
        //     setFormValidationMessage(prev => [...prev, 'Name is Not Valid']);
        //     setValidation(prev => ({ ...prev, name: true }));
        //     nameRef.current.focus();
        // } else if (userNameRef.current.value === '') {
        //     setFormValidationMessage(prev => [...prev, 'Username is Not Valid']);
        //     setValidation(prev => ({ ...prev, userName: true }));
        //     userNameRef.current.focus();
        // } else if (emailRef.current.value === '') {
        //     setFormValidationMessage(prev => [...prev, 'Email is Not Valid']);
        //     setValidation(prev => ({ ...prev, email: true }));
        //     emailRef.current.focus();
        // } else if (passwordRef.current.value === '' || passwordRef.current.value.length < 6) {
        //     setFormValidationMessage(prev => [...prev, 'Password is Not Valid']);
        //     setValidation(prev => ({ ...prev, password: true }));
        //     passwordRef.current.focus();
        // } else if (!termsRef.current.checked) {
        //     setFormValidationMessage(prev => [...prev, 'Check the Terms and Conditions']);
        // } else {
        //     return true;
        // }
    }

    const resetValidation = () => {
        setValidation({
            name: false,
            userName: false,
            email: false,
            password: false,
        });
    }

    useEffect(() => {
    }, [validation])

    const createAccount = () => {
        if (formValidation()) {
            navigateToCreateProfilePage();
        }
    }

    return (
        <main className='w-screen h-screen flex'>
            <aside className='min-w-[400px] max-w-[400px] h-full bg-[#f2d184] hidden lg:flex flex-col justify-around items-center'>
                <h1 className='self-start pl-10 text-2xl font-extrabold text-[#856316]'>
                    Discover the world&apos;s top
                    <br />
                    Designers & Creatives
                </h1>
                <img src={signup_3d} />
            </aside>
            <section className='w-full h-full p-5 bg-gray-50 '>
                <div className='flex gap-2 justify-end'>
                    <p className='font-medium'>
                        Already a member?
                    </p>
                    <button onClick={navigateToLogin} className='text-[#4853f3]'>
                        Sign In
                    </button>
                </div>
                <form className='flex flex-col items-start gap-7 mt-[50px] min-[660px]:ml-[15%] min-[660px]:w-[500px]'>
                    <h1 className='font-extrabold text-3xl md:text-4xl'>
                        Sign up to Dribbble
                    </h1>
                    {
                        formValidationMessage ? (
                            formValidationMessage.map(
                                (error, index) =>
                                    <li className='text-warning' key={index}>
                                        {error}
                                    </li>
                            )
                        ) : null
                    }
                    <section className='flex gap-5 w-full'>
                        <CustomInputComponent
                            refernce={nameRef}
                            title={'Name'}
                            id={'name'}
                            isValidationFailed={validation.name}
                        />
                        <CustomInputComponent
                            refernce={userNameRef}
                            title={'Username'}
                            id={'username'}
                            isValidationFailed={validation.userName}
                        />
                    </section>
                    <CustomInputComponent
                        type={'email'}
                        refernce={emailRef}
                        title={'Email'}
                        id={'email'}
                        isValidationFailed={validation.email}
                    />
                    <CustomInputComponent
                        type={'password'}
                        placeholder={'6+ characters'}
                        refernce={passwordRef} title={'Password'} id={'password'}
                        isValidationFailed={validation.password}
                    />
                    <div className='flex justify-start items-start gap-2'>
                        <input ref={termsRef} type='checkbox' className='w-5 h-5' />
                        <p className=' text-secondary text-md max-[500px]:text-sm line-clamp-3 text-ellipsis overflow-hidden'>
                            Creating an account means you&apos;re ok with our <Link to={'/'} className='text-link'>Terms of<br className='max-[500px]:hidden' /> Service,</Link>
                            <Link to={'/'} className='text-link'> Privacy Policy,</Link> and our default <Link to={'/'} className='text-link'>Notification<br className='max-[500px]:hidden' /> Settings.</Link>
                        </p>
                    </div>
                    <button
                        type='button'
                        className='bg-button rounded-lg text-button px-10 font-medium py-2 block'
                        onClick={createAccount}
                    >
                        Create Account
                    </button>
                    <p className='text-secondary text-xs line-clamp-3 text-ellipsis overflow-hidden'>
                        This site is protected by reCAPTCHA and the Google<br className='max-[500px]:hidden' />
                        <Link to={'/'} className='text-link'> Privacy Policy,</Link> and <Link to={'/'} className='text-link'>Terms of Service apply.</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default SignUpPage


const CustomInputComponent = ({ refernce, id, title, placeholder, type, isValidationFailed }) => {

    return (
        <div className='w-full flex flex-col'>
            <label htmlFor={id} className='font-bold text-lg flex items-center gap-2'>
                <FaExclamationCircle className={`${isValidationFailed ? 'block' : 'hidden'}`} color='red' />{title}
            </label>
            <input
                id={id}
                placeholder={placeholder || title}
                ref={refernce}
                type={type || 'text'}
                className={`w-full px-5 py-2 rounded-lg ${isValidationFailed ? "bg-red-200 text-warning" : "bg-gray-200"} placeholder:text-gray-500`}
            />
        </div>
    )
}