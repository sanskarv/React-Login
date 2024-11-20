import React from 'react'
import ico1 from '../assets/ico1.png'
import Roles from './Roles'



const Bell = () => {
    return (
        <>
            {/* <Roles /> */}
            <div className="Bell">
                <h1> why choose us?</h1>
                <span>Experience seamless virtual interviews with our advanced AI technology. Enjoy global reach, customizable solutions, enhanced candidate experience, and robust security. Save time and costs while accessing expert support and transforming your hiring process effectively.</span>
                <article>
                    <figure>
                        <div className='img-back'><img src={ico1} alt="" /></div>
                        <div className='cont'>

                            <h2>We deliver Quality</h2>

                            <p> Tailor our platform to meet your specific hiring needs. We offer customizable interview workflows, branding options, and integration with your existing HR systems.</p>
                        </div>
                    </figure>
                    <figure>
                        <div className='img-back'><img src="src/assets/ico2.png" alt="" /></div>

                        <div className='cont'>
                            <h2>Enhanced Candidate Experience</h2>
                            <p>Provide candidates with a convenient and engaging interview process. Our user-friendly interface ensures a positive experience, leaving a lasting impression on top talent.</p>

                        </div>
                    </figure>
                    <figure>
                        <div className='img-back'><img src="src/assets/ico3.png" alt="" /></div>

                        <div className='cont'>
                            <h2>we are passionate</h2>
                            <p>Provide candidates with a convenient and engaging interview process. Our user-friendly interface ensures a positive experience, leaving a lasting impression on top talent.</p>
                        </div>

                    </figure>
                    <figure>
                        <div className='img-back'><img src="src/assets/ico4.png" alt="" /></div>

                        <div className='cont'>
                            <h2>Advanced Technology</h2>
                            <p> Leveraging the latest in AI and machine learning, our system provides intelligent candidate screening and insightful analytics to streamline your hiring process.</p>
                        </div>

                    </figure>
                </article>
            </div>
        </>
    )
}

export default Bell
