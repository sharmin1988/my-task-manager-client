import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../components/PrimaryBtn';

const AddTask = () => {
    return (
        <div className='my-14 lg:my-24 mx-3'>
            <section className="flex items-center flex-1">
                <div className="lg:flex  w-full ">
                    <img className=' lg:w-2/5 mx-auto h-96' src="https://img.freepik.com/free-photo/male-hand-with-pen_155003-6453.jpg?size=626&ext=jpg&uid=R81442295&ga=GA1.2.1239272833.1664376337&semt=sph" alt="" />
                    
                    <div className='w-4/5 lg:w-3/6 mx-auto lg:mt-0 mt-3'>
                        <form >
                            <div>
                                <span className="text-sm text-gray-900">Hello!!! Rasna</span>
                                <h1 className="text-2xl lg:text-3xl font-bold text-sky-500">Add your Daily task</h1>
                            </div>

                            <div className="my-3">
                                <label className="block text-md mb-2" >Title</label>
                                <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                type="text" name="title" placeholder="title" />
                            </div>
                            <div className="my-3">
                                <label className="block text-md mb-2" >Work details</label>
                                <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                type="text" name="workDetails" placeholder="work details" />
                            </div>

                            <div className="mt-5">
                                <input type="file" name="" />
                            </div>

                            <div className="flex justify-between">
                                <span className="text-xs my-2 font-semibold text-red-700 "></span>
                            </div>
                            <div className='mb-4'>
                                <PrimaryBtn>Add task</PrimaryBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddTask;