"use client"
import React, { useEffect } from 'react';
import { Input, Ripple, initTWE } from 'tw-elements';

const InputComponent = (props) => {
    return <Input {...props} />;
};

const RippleComponent = (props) => {
  return <Ripple {...props} />;
};


const LogIn = () => {

    useEffect(() => {
        initTWE({ Input: InputComponent, Ripple: RippleComponent });
      }, []);
      
  return (
  <div className='h-screen'>
    <div className="container h-full px-6 py-24">
    <div
      className="flex h-full flex-wrap items-center justify-center lg:justify-between">

      <div className="md:block hidden mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image" />
      </div>

      <div className="md:mr-20 md:w-8/12 lg:ms-6 lg:w-5/12">
      <div className='font-semibold text-4xl text-black text-center'>
        <h1>AeduZ</h1>
      </div>
        <form>
          <div className="relative mb-6 mt-10" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="Email address" />
            <label
              for="exampleFormControlInput3"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              placeholder="Password" />
            <label
              for="exampleFormControlInput33"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Password
            </label>
          </div>

            <div className='mb-5'>
            <a
              href="#!"
              className="text-[#3B71CA] hover:text-[#1266F1] focus:outline-none dark:text-primary-400"
              >Forgot password?</a
            >
            </div>

          <button
            type="submit"
            className="bg-[#3B71CA] inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
            data-twe-ripple-color="light">
            Log in
          </button>

          <h1 className='font-bold md:text-2xl text-black text-center my-4'>OR</h1>

              <button
                type="submit"
                className="bg-[#34A853] inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[green]"
                data-twe-ripple-color="light">
                Continue with Google
              </button>
              <div className='flex justify-center md:mt-4 mt-8'>
                <div>
                  <h3 className='text-white text-center mb-4'>New User?</h3>
                  <button
                    type="submit"
                    className="bg-black text-white text-xl rounded py-2 px-4 hover:bg-[#201f1f]"
                    data-twe-ripple-color="light">
                    Register Now
                  </button>
                  {/* <a
                  href="#!"
                  className="text-center decoration-none text-xl font-semibold text-white"
                  >REGISTER NOW</a
                  >     */}
                </div>
              </div>

        </form>

        </div>
      </div>
    </div>
  </div>
  )
}

export default LogIn;