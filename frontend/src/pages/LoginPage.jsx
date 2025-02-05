import React from 'react'
import { Link } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'

const LoginPage = () => {
  return (
    <>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={() => {}}>
            <h4 className='text-xl text-center mb-7'>
              Login to <span className='text-[var(--secondary)] font-bold'>Inkspire</span>
              </h4>
            
            <input type="text" placeholder='Email' className='input-box' />

            <PasswordInput />

            <button type='submit' className='btn-primary'>Login</button>

            <p className='text-sm text-center mt-4'>
              Not registered yet? {""}
              <Link to={'/signup'} className='text-[var(--secondary)] underline'>
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage