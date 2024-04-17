import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Want to collaborate?
            <br  className='sm:block hidden'/>
            Let us Work Together!
        </p>
        <Link to='/contact' className='btn'>
            Contact Me
        </Link>
    </section> 
  )
}

export default CTA