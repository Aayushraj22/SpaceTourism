import React from 'react'
import { Link } from 'react-router-dom'

import './errorpage.css'


export const Errorpage = () => {
    return (
        <div className='errorpage'>
            <div className='errorpage-text-container'>
                <h1 >Something got Wrong</h1>
                <Link to={'/'}>Go To Home</Link>
            </div>
        </div>
    )
}
