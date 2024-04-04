/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

import CardImage1 from '../../public/images/whats(1).png'
import CardImage2 from '../../public/images/whats(2).png'
import CardImage3 from '../../public/images/whats(3).png'

const WhatsBringYouPage = () => {

    const navigate = useNavigate();


    const [checkList, setCheckList] = useState([
        {
            title: "I'm a Designer looking to share my work",
            description: "This is new decription that ensures the data of the work in the value of the users",
            image: CardImage1,
            isChecked: false,
        },
        {
            title: "I'm a Designer looking to share my work",
            description: "This is new decription that ensures the data of the work in the value of the users",
            image: CardImage2,
            isChecked: false,
        },
        {
            title: "I'm a Designer looking to share my work",
            description: "This is new decription that ensures the data of the work in the value of the users",
            image: CardImage3,
            isChecked: false,
        }
    ]);

    const handleSelected = (selectedIndex) => {
        const newList = checkList.map((data, index) => {
            if (index === selectedIndex) return { ...data, isChecked: !data.isChecked }
            return data;
        })
        setCheckList(newList);
    }

    const navigateVerificationPage = () => {
        navigate('/')
    }

    return (
        <main className='min-h-screen h-full flex flex-col'>
            <header className='flex gap-5 items-center px-2 md:px-10 py-4 md:py-8'>
                <h1 className='text-pink-500 italic text-md md:text-xl'>
                    Dribbble
                </h1>
                <button onClick={() => navigate('/createprofile')} className='bg-gray-300 p-2 md:p-3 rounded-lg'>
                    <FaArrowLeft className='fill-gray-500 w-5' />
                </button>
            </header>
            <section className='flex h-[calc(100vh-104px)] justify-around items-center flex-col'>
                <div className='flex justify-center items-center flex-col gap-5 px-2'>
                    <h1 className='text-2xl md:text-4xl font-extrabold text-center'>
                        Whats bring you to Dribbble?
                    </h1>
                    <p className='text-sm md:text-lg text-gray-500 text-center'>
                        Select the option that best describe you. Don&apos;t Worry, you can explore other options later.
                    </p>
                </div>
                <div className='flex flex-col my-5 md:my-0 md:flex-row justify-center items-center gap-5 lg:gap-14 w-full px-5 md:overflow-y-scroll'>
                    {
                        checkList.map((checkListData, index) => <WhatsBringYouCard key={index} data={checkListData} onClick={() => handleSelected(index)} />)
                    }
                </div>
                <div className='flex flex-col gap-2 items-center pb-5 md:pb-0'>
                    <p className='font-extrabold text-md text-center'>
                        Any thing else? you can select multiple
                    </p>
                    <button onClick={navigateVerificationPage} className='px-10 py-2 bg-button rounded-lg text-button'>
                        Finish
                    </button>
                    <p className='text-sm text-gray-400 font-bold text-center'>or Press RETURN</p>
                </div>
            </section>
        </main>
    )
}

export default WhatsBringYouPage


const WhatsBringYouCard = ({ data, onClick }) => {
    return <button onClick={onClick} className={`p-5 border-2 ${data.isChecked ? "border-pink-600" : "border-gray-200"} transition-all duration-150 rounded-lg flex flex-col items-center justify-around gap-3`}>
        <img className='w-[150px] h-[150px] object-contain md:w-[200px]' src={data.image} />
        <p className='w-[250px] text-lg md:text-xl font-extrabold text-center'>
            {data.title}
        </p>
        {data.isChecked && <p className='w-[250px] text-sm overflow-hidden line-clamp-3 text-ellipsis'>
            {data.description}
        </p>}
        <div className={`rounded-full outline-none align-middle p-1 md:p-2 appearance-none  border border-gray-400 flex justify-center items-center ${data.isChecked && 'bg-pink-600'}`}>
            <FaCheck color='white' />
        </div>
    </button>
}