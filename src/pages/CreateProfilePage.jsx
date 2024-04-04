/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const CreateProfilePage = () => {

    const navigate = useNavigate();

    const [base64IMG, setBase64IMG] = useState(undefined);
    const locationRef = useRef();

    const selectFile = (event) => {
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])

        reader.onload = () => {
            setBase64IMG(reader.result)
        }
    }

    const navigateToWhatsBringYouPage = () => {
        navigate('/whatsbringyou')
    }

    return (
        <main className='flex flex-col p-2 w-screen min-h-screen'>
            <header className='flex gap-5 items-center px-2 md:px-10 py-4 md:py-8'>
                <h1 className='text-pink-500 italic text-md md:text-xl'>
                    Dribbble
                </h1>
            </header>
            <section className='flex flex-col gap-5 items-center'>
                <h1 className='text-3xl md:text-5xl font-extrabold text-center'>Welcome! Let&apos;s create your profile</h1>
                <h2 className=' text-md md:text-lg text-gray-500 text-center'>Lets others get you know better! You can do these later</h2>

                <div className='flex flex-col gap-5 items-center md:items-start md:mt-5'>
                    <h2 className='font-extrabold text-xl'>Add an avatar</h2>
                    <div className='flex gap-5 flex-wrap justify-center md:justify-start'>
                        <div className={`w-[150px] h-[150px] flex items-center justify-center rounded-full  border-[2px] ${!base64IMG ? "border-gray-300" : "border-white"} border-dotted  overflow-hidden`} >
                            {
                                base64IMG ? <img src={base64IMG} className='w-full h-full object-cover' /> : <FaCamera color='gray' size={25} />
                            }
                        </div>
                        <div className='flex flex-col gap-5  mt-5'>
                            <label htmlFor='avatarimage'>
                                <div className='px-5 flex justify-center text-md cursor-pointer font-semibold py-2 border rounded-lg' >
                                    Choose image
                                </div>
                            </label>
                            <h3 className='text-md font-medium text-gray-500 '>
                                &gt; Or choose one of our defaluts
                            </h3>
                            <input
                                accept='.jpg, .png|image/*'
                                type='file' onChange={selectFile}
                                className='hidden'
                                id='avatarimage'
                            />
                        </div>
                    </div>

                    <h2 className='font-extrabold text-xl mt-5 md:mt-10'>Add your location</h2>
                    <input
                        className='w-full py-3 border-b outline-none mx-5'
                        ref={locationRef}
                        placeholder='Enter your location'
                    />
                    <button onClick={navigateToWhatsBringYouPage} className='px-20 py-2 rounded-lg bg-button text-button mt-6'>Next</button>
                </div>
            </section>
        </main>
    )
}

export default CreateProfilePage