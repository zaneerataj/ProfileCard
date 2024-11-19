import { useState } from 'react';
import pro from '../assets/pro.png';

const UserCard = () => {
    const [isOnline, setIsOnline] = useState<boolean>(false); // Online status
const onChange= ()=>{
    setIsOnline((prevState)=>!prevState)
}
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='h-fit w-fit bg-slate-400 gap-4 p-4 rounded-lg mt-4 border border-gray-300'>
                <div className='flex justify-center flex-col'>
                    
                    {/* Profile Image with Conditional Border */}
                    <div className='flex justify-center'>
                       <button onClick={onChange}> <img 
                            src={pro} 
                            alt="profile" 
                            className={`h-20 w-20 rounded-full border-4 ${isOnline ? 'border-green-500' : 'border-gray-300'}`} // Apply conditional border color
                        /></button>
                    </div>
                   
                    {/* Name, Location, and Occupation */}
                    <div className='text-center'>
                        <h3 className='text-xl font-semibold'>ZANEERA</h3>
                        <h3 className='text-lg'>Bangalore</h3>
                        <p className='text-lg text-gray-600'>Web Developer</p>
                    </div>
                   
                    {/* Buttons Section */}
                    <div className='flex gap-3 ml-6'>
                        <button className=' text-white px-4 py-2 rounded border-2 border-slate-600 hover:bg-slate-950 '>Message</button>
                        <button className=' text-white px-4 py-2 rounded border-2 border-slate-600 hover:bg-slate-950'>Following</button>
                    </div>
                </div>

                {/* Skills Section */}
                <div className='mt-4 w-64'>
                    <h2 className='text-lg font-semibold'>Skills</h2>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='border-2 rounded-lg p-1'>HTML</li>
                        <li className='border-2 rounded-lg p-1'>CSS</li>
                        <li className='border-2 rounded-lg p-1'>JavaScript</li>
                        <li className='border-2 rounded-lg p-1'>React</li>
                        <li className='border-2 rounded-lg p-1'>Angular</li>
                        <li className='border-2 rounded-lg p-1'>TypeScript</li>
                        <li className='border-2 rounded-lg p-1'>Python</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
