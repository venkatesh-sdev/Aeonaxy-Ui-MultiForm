/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/signup')}>Go SignUp</button>
        </div>
    )
}

export default HomePage