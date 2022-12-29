import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyTaskCard from './MyTaskCard';

const MyTask = () => {
    const {user} = useContext(AuthContext)
    const {email} = user
    const [allTask, setAllTask] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allTask?email=${email}`)
        .then(res => res.json())
            .then(data => {
                setAllTask(data)
            })
    }, [email])

    return (
        <div className='my-24 px-6 lg:px-10'>
            <h2 className='text-center text-3xl font-bold mb-10'>Hello!!! {user?.displayName}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    allTask.map(task => <MyTaskCard
                    key={task._id}
                    task = {task}
                    ></MyTaskCard>)
                }
            </div>
        </div>
    );
};

export default MyTask;