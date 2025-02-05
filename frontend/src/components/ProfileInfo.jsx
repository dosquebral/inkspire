import React from 'react'
import {getInitials} from '../utils/helper.js'
import { Link } from 'react-router-dom'

const ProfileInfo = () => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center bg-[var(--primary)] rounded-full text-slate-950 text-medium font-medium'>
            {getInitials("Darlene Quebral")}
        </div>

        <div className='text-start'>
            <p className='tex-sm text-[var(--primary)]'>Darlene Quebral</p>
            <button className='text-sm text-slate-200 underline'>
                <Link to={'/login'}>
                    Logout
                </Link>
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo