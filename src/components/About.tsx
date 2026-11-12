import React from 'react'

const About = () => {
  return (
    <div id="About">
      <div className="flex items-center gap-3 pb-3 ">
        <span className="h-px w-10 bg-orange-600 "></span>
        <span className="">About</span>
      </div>
      <div className='flex justify-between'>
        <span>Pegah Ashrafi</span>
        <span>
          Building scalable web & mobile applications with a focus on polished
          UI/UX.
        </span>
      </div>
      <span>Full Stack Developer</span>
    </div>
  );
}

export default About