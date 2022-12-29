import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import CompleteTaskCard from './CompleteTaskCard';

const CompletedTask = () => {
    const {user} = useContext(AuthContext)
    const {email} = user
    const navigate = useNavigate()

    const { data: allTask, isLoading, refetch } = useQuery({
        queryKey: ['allTask', email],
        queryFn: async () => {
            const res = await fetch(`https://my-task-manager-server-phi.vercel.app/allTask?email=${email}`)
            const data = await res.json()
            
            return data
        }
    })

    const handelDelete = id => {
        const proceed = window.confirm('Are u sure to delete??')
        if (proceed) {
            fetch(`https://my-task-manager-server-phi.vercel.app/allTask/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Your data deleted successfully!!!!')
                        refetch()
                    }
                })
        }

    }

    const handelNotComplete = id => {
        const proceed = window.confirm('Are u sure??')
        if(proceed){
            fetch(`https://my-task-manager-server-phi.vercel.app/completeTask/${id}`, {
            method: 'PATCH',            
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    navigate('/myTask')
                }
            })
        }
    }

    const completedTask = allTask?.filter (t => t.isComplete )

    if(isLoading){
        return <p>Loading...........</p>
    }

    return (
        <div className='my-24 px-6 lg:px-10'>
            <h2 className='text-center text-3xl font-bold mb-10'>Completed task</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    completedTask?.map(task =><CompleteTaskCard
                        key={task._id}
                        task = {task}
                        handelDelete = {handelDelete}
                        handelNotComplete = {handelNotComplete}
                    ></CompleteTaskCard>
                )}
            </div>
        </div>
    );
};

export default CompletedTask;