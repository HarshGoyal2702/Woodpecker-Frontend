import React from 'react'

const About = () => {
  return (
    <div className='flex gap-11'>
        <div>
            <img src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='rounded-md' />
        </div>
        <div>
            <h1 className='font-bold text-xl mb-4'>Impact of Disaster</h1>
            <p className='font-normal '>Disasters can have a devastating impact on the environment, economy, and society. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam doloribus assumenda aperiam rerum fugit nisi beatae, at optio qui tempore accusamus delectus totam harum deleniti, repudiandae quidem sapiente non.
                 <br/> 
            <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident ex debitis error similique, culpa maiores expedita unde, placeat fugit sequi ab eius, dolorum consequatur beatae a aspernatur tenetur vero.
            </p>
            <br />
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic velit deleniti, sapiente amet similique perspiciatis sit repudiandae exercitationem itaque facilis aperiam aliquam soluta accusantium sunt vero, temporibus qui autem.</p></p>
           <button className='bg-red-600 mt-10 pl-10 pr-10 p-2 rounded-lg text-white hover:bg-red-400' >Alert</button>
        </div>
    </div>
  )
}

export default About