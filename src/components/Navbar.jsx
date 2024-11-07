import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
    return (
        <>
            <div>

                <nav className='bg-blue-200 py-5 px-10 flex items-center justify-between'>
                    <h2 className='text-2xl'>Gut</h2>

                    <NavPart2 />
                </nav>

            </div>
            <h3 className='text-center'>This is Navbar</h3>
        </>
    )
}

export default Navbar