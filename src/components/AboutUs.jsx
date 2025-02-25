import React from 'react'
import { focusAreas } from '../constants'

function AboutUs() {
  return (
    <div>
      <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center'>
            <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                About Us
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                Who Are {" "}
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                    We?
                </span>
            </h2>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto'>
                Sahayog means 'collaboration'—and that's exactly what we stand for. We are a non-profit organization committed to bringing positive change by providing essential resources, empowering individuals, and building a stronger society. With your support, we can create a brighter future for those in need
            </p>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20'>
            {focusAreas.map((area, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                    <div className='flex'>
                        <div>
                            <h5 className='mt-6 mb-6 text-xl text-center text-orange-700'>
                                {area.label}
                            </h5>
                            <p className='text-md p-2 mb-20 text-neutral-300 text-center'>
                                {area.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
