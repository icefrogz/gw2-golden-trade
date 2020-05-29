import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gw2trade from 'api/gw2trade'

const SignIn = () => {
  const email = useRef()
  const password = useRef()
  const isSigningIn = useSelector((state) => state.auth.isSigningIn)
  const isSignedIn = useSelector((state) => state.auth.isSignedIn)
  const errors = useSelector((state) => state.auth.errors)

  const dispatch = useDispatch()

  function logIn() {
    dispatch({ type: 'SIGNING_IN' })
    gw2trade
      .post('/auth/sign_in', {
        sign_in: {
          email: email.current.value,
          password: password.current.value,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch({ type: 'SIGNED_IN' })
      })
      .catch((error) => {
        console.log(error.toJSON())
        dispatch({
          type: 'SIGNED_IN_FAILED',
          payload: { errors: error.response.data },
        })
      })
  }

  return (
    <div className='container'>
      <div className='row justify-content-center min-vh-100 py-5'>
        <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4'>
          <div className='card'>
            <div className='card-body p-4'>
              <div className='row justify-content-center mb-4'>
                <div className='col-auto'>
                  <h5>Sign In to Account</h5>
                </div>
              </div>
              {errors.error && (
                <div className='alert alert-danger' role='alert'>
                  {errors.error}
                </div>
              )}
              <form>
                <div className='form-group'>
                  <input
                    ref={email}
                    className='form-control'
                    type='text'
                    placeholder='Email or Username'
                  />
                </div>
                <div className='form-group'>
                  <input
                    ref={password}
                    className='form-control'
                    type='password'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group'>
                  <button
                    className='btn btn-primary btn-block'
                    type='button'
                    name='login'
                    onClick={logIn}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
