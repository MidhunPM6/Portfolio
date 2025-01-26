import React, { useEffect } from 'react'
import gif from '../assets/gif.json'
import { useRef, useState } from 'react'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Lottie from 'lottie-react'

import emailjs, { send } from '@emailjs/browser'

const ContactSection = () => {
  const linkedinLink = 'https://www.linkedin.com/in/midhunpm6060/'
  const gitLink = 'https://github.com/MidhunPM6'
  const mailLink = ''

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm('service_o5qn9m8', 'template_4appxju', form.current, {
        publicKey: 'NmgqhtopXvxLv0mf4'
      })
      .then(
        () => {
          toast('Send Successfully')
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )
  }

  const paragraphRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
          observer.disconnect(); // Stop observing after the animation starts
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const section = paragraphRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up observer
      }
    };
  }, []);


  return (
    <>
      <div
        className='bg-gradient-to-r from-slate-950 to-slate-800 min-h-screen md:p-12 p-6'
        id='reachme'
      >
        <ToastContainer
          position='top-right'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <div className='flex flex-col md:flex-row  items-center  rounded-md  '>
          <div className='flex flex-col items-center w-full  md:w-[50%] md:h-[60vh] h-[40vh]  rounded-md md:mb-0 mb-10 '>
            <div className='md:w-[64%] w-full  '>
              <Lottie loop={true} animationData={gif}></Lottie>
            </div>
          </div>

          <div className='flex flex-col  p-10 w-full  md:mb-0  md:w-[36%] h-[55vh] bg-black rounded-xl shadow-2xl shadow-blue-950 mb-10 '>
            <form
              action=''
              className='flex flex-col items-center'
              onSubmit={sendEmail}
              ref={form}
            >
              <h1 className='text-2xl text-white font-semibold'>Connect me</h1>
              <input
                type='text'
                placeholder='Enter your name'
                name='from_name'
                className='bg-gray-200 p-2  rounded-md text-gray-700 w-full md:w-[80%] lg:w-[50%] mt-10   outline-none focus:border  border-blue-700  shadow-2xl shadow-blue-800'
              />
              <input
                type='email'
                name='from_email'
                placeholder='Enter your email'
                className='bg-gray-200 p-2 rounded-md text-gray-700 w-full md:w-[80%] lg:w-[50%] mt-6   outline-none focus:border  border-blue-700  shadow-2xl shadow-blue-800'
              />
              <textarea
                name='message'
                id=''
                placeholder='Description'
                className='bg-gray-200 p-2 rounded-md text-gray-700 w-full md:w-[80%] lg:w-[50%] mt-6   outline-none focus:border  border-blue-700  shadow-2xl shadow-blue-800 max-h-28'
              ></textarea>
              <button
                type='submit'
                value='Send'
                className='flex mt-5 bg-white text-black py-2 px-6  rounded-lg  shadow-2xl shadow-black hover:bg-gradient-to-r from-blue-950 to-blue-900 hover:text-white'
              >
                Send{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6 ml-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
                  />
                </svg>
              </button>
            </form>
            <div className='flex mt-7  '></div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center text-white text-xl  md:mt-20 '>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 64 64'
              className='size-12 cursor-pointer hover:scale-125 '
              onClick={() => (window.location.href = gitLink)}
            >
              <circle cx='32' cy='32' r='23' fill='#9c34c2'></circle>
              <ellipse cx='32' cy='61' opacity='.3' rx='19' ry='3'></ellipse>
              <path
                fill='#fff'
                d='M32,14c2.577,0,4.674-1.957,4.946-4.461C35.352,9.19,33.699,9,32,9	C19.297,9,9,19.297,9,32c0,1.699,0.19,3.352,0.539,4.946C12.044,36.674,14,34.577,14,32C14,22.075,22.075,14,32,14z'
                opacity='.3'
              ></path>
              <path
                fill='none'
                stroke='#fff'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
                stroke-width='3'
                d='M15.047,23.427c1.878-3.699,4.932-6.705,8.666-8.522'
              ></path>
              <path
                fill='#a0effe'
                d='M37.184,43.111c4.556-1.02,7.818-3.645,7.818-9.252c0-2.6-0.787-4.556-1.97-6.011	c-0.273-0.336-0.274-1.056-0.162-1.474c0.281-1.043,0.066-2.404-0.17-3.383c-0.177-0.73-0.94-1.156-1.662-0.949	c-1.707,0.491-3.115,1.466-4.138,2.136c-0.279,0.182-0.602,0.255-0.931,0.203c-1.244-0.197-2.581-0.282-3.964-0.302L32,24.113V24.08	c-1.383,0.02-2.72,0.105-3.964,0.302c-0.329,0.052-0.652-0.021-0.931-0.203c-1.023-0.669-2.431-1.644-4.138-2.136	c-0.721-0.208-1.485,0.219-1.662,0.949c-0.237,0.979-0.451,2.341-0.17,3.383c0.113,0.418,0.112,1.138-0.162,1.474	c-1.183,1.455-1.97,3.41-1.97,6.011c0,5.607,3.261,8.232,7.818,9.252c0.774,0.173,0.843,1.018,0.544,1.753	c-0.236,0.582-0.368,1.009-0.368,1.677v0.315c-0.168,0.046-0.342,0.087-0.53,0.111c-1.142,0.147-1.98,0-2.559-0.343	c-0.58-0.343-1.267-0.909-1.783-1.662c-0.435-0.635-1.375-2.003-3.596-1.949c-0.388-0.01-0.565,0.354-0.516,0.581	c0.044,0.2,0.22,0.516,0.924,0.773c0.706,0.259,1.169,0.788,1.556,1.411c0.431,0.695,0.693,2.143,2.196,3.218	c0.901,0.644,2.078,1.036,2.954,0.996c0.742-0.034,1.355,0.574,1.355,1.317l0.001,1.628c0,0.659-0.603,1.326-1.228,1.21	c1.854,0.624,4.129,0.813,6.229,0.84v-0.047l0.005,0.047c2.1-0.026,4.375-0.216,6.229-0.84c-0.625,0.115-1.228-0.552-1.228-1.21	l0.002-6.396c0-0.668-0.132-1.095-0.368-1.677C36.342,44.13,36.41,43.285,37.184,43.111z'
              ></path>
              <path
                d='M54.461,27.054C51.956,27.326,50,29.423,50,32c0,9.925-8.075,18-18,18	c-2.577,0-4.674,1.957-4.946,4.461C28.648,54.81,30.301,55,32,55c12.703,0,23-10.297,23-23C55,30.301,54.81,28.648,54.461,27.054z'
                opacity='.15'
              ></path>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 64 64'
              className='size-12 ml-2 cursor-pointer hover:scale-125'
              onClick={() => (window.location.href = linkedinLink)}
            >
              <linearGradient
                id='SUJNhpmDQDF27Y3OfwgfYa_44019_gr1'
                x1='19'
                x2='19'
                y1='24.858'
                y2='49.041'
                gradientUnits='userSpaceOnUse'
                spreadMethod='reflect'
              >
                <stop offset='0' stop-color='#6dc7ff'></stop>
                <stop offset='1' stop-color='#e6abff'></stop>
              </linearGradient>
              <path
                fill='url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)'
                fill-rule='evenodd'
                d='M22 48L22 26 16 26 16 48 22 48z'
                clip-rule='evenodd'
              ></path>
              <linearGradient
                id='SUJNhpmDQDF27Y3OfwgfYb_44019_gr2'
                x1='19.382'
                x2='19.382'
                y1='15.423'
                y2='23.341'
                gradientUnits='userSpaceOnUse'
                spreadMethod='reflect'
              >
                <stop offset='0' stop-color='#6dc7ff'></stop>
                <stop offset='1' stop-color='#e6abff'></stop>
              </linearGradient>
              <path
                fill='url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)'
                fill-rule='evenodd'
                d='M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z'
                clip-rule='evenodd'
              ></path>
              <linearGradient
                id='SUJNhpmDQDF27Y3OfwgfYc_44019_gr3'
                x1='37.386'
                x2='37.386'
                y1='14.125'
                y2='49.525'
                gradientUnits='userSpaceOnUse'
                spreadMethod='reflect'
              >
                <stop offset='0' stop-color='#6dc7ff'></stop>
                <stop offset='1' stop-color='#e6abff'></stop>
              </linearGradient>
              <path
                fill='url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)'
                fill-rule='evenodd'
                d='M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z'
                clip-rule='evenodd'
              ></path>
              <linearGradient
                id='SUJNhpmDQDF27Y3OfwgfYd_44019_gr4'
                x1='32'
                x2='32'
                y1='6.5'
                y2='57.5'
                gradientUnits='userSpaceOnUse'
                spreadMethod='reflect'
              >
                <stop offset='0' stop-color='#1a6dff'></stop>
                <stop offset='1' stop-color='#c822ff'></stop>
              </linearGradient>
              <path
                fill='url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)'
                d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'
              ></path>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 64 64'
              className='size-12 ml-2 cursor-pointer hover:scale-125 '
              onClick={() =>
                (window.location.href = 'mailto:midhunpm6060@gmail.com')
              }
            >
              <linearGradient
                id='AWKzNDila4ISNLgYjkvBOa_ihMzI7k32pJf_gr1'
                x1='32'
                x2='32'
                y1='55'
                y2='9'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stop-color='#c822ff'></stop>
                <stop offset='1' stop-color='#1a6dff'></stop>
              </linearGradient>
              <path
                fill='url(#AWKzNDila4ISNLgYjkvBOa_ihMzI7k32pJf_gr1)'
                d='M50,9H14c-2.8,0-5,2.2-5,5v36c0,2.8,2.2,5,5,5h36c2.8,0,5-2.2,5-5V14C55,11.2,52.8,9,50,9z M53,50c0,1.7-1.3,3-3,3H14c-1.7,0-3-1.3-3-3V14c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3V50z M45,19H19c-1.654,0-3,1.346-3,3v20 c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V22C48,20.346,46.654,19,45,19z M44.87,21L33.415,32.455 c-0.679,0.68-1.865,0.681-2.546,0L19.414,21H44.87z M18,41.586V22.414L27.586,32L18,41.586z M19.414,43L29,33.414l0.455,0.455 c0.717,0.718,1.672,1.113,2.687,1.113c1.016,0,1.97-0.395,2.688-1.113l0.323-0.323L44.845,43H19.414z M46,41.333l-9.433-9.201 L46,22.698V41.333z M27,41h10v-2H27V41z'
              ></path>
              <linearGradient
                id='AWKzNDila4ISNLgYjkvBOb_ihMzI7k32pJf_gr2'
                x1='32'
                x2='32'
                y1='30.509'
                y2='23'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stop-color='#e6abff'></stop>
                <stop offset='1' stop-color='#6dc7ff'></stop>
              </linearGradient>
              <path
                fill='url(#AWKzNDila4ISNLgYjkvBOb_ihMzI7k32pJf_gr2)'
                d='M25.691,23h12.618c0.535,0,0.802,0.646,0.424,1.024l-6.309,6.309 c-0.234,0.234-0.614,0.234-0.849,0l-6.309-6.309C24.889,23.646,25.156,23,25.691,23z'
              ></path>
            </svg>
          </div>
          <div className="mt-5 px-4 w-full max-w-screen-sm mx-auto md:mb-10 mb-10">
  <p className="flex flex-col items-start ">
   
    <span className="block text-xl sm:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-red-700 bg-clip-text text-transparent">
      Thank you..
    </span>

    <span className="fade-in block text-sm sm:text-base text-gray-300" ref={paragraphRef}>
      for taking the time to explore my portfolio! I hope you found my work
      interesting and would love to connect with you for any opportunities or
      collaborations!!
    </span>
  </p>
</div>








        </div>
      </div>
    </>
  )
}

export default ContactSection
