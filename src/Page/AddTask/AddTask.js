import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../components/PrimaryBtn';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext)
    const imgbbHostkey = process.env.REACT_APP_imgbbKey
    const navigate = useNavigate()

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const { register, handleSubmit, } = useForm();
    const handelAddData = data => {
        console.log(data)

        const image = data.img[0]
        console.log(image);
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostkey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imageUrl = imgData.data.url;

                    // destructuring input field data
                    const { title, workDetails } = data
                    console.log(data);
                    const task = {
                        title,
                        workDetails,
                        img: imageUrl,
                        user: user?.displayName,
                        email: user?.email,
                        postDate: date
                    }

                    // save product in dataBase
                    fetch('http://localhost:5000/allTask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if(data.acknowledged){
                                toast.success('task successfully added')
                                navigate('/myTask')
                            }
                        })
                }
            })

    }




    return (
        <div className='my-14 lg:my-24 mx-3'>
            <section className="flex items-center flex-1">
                <div className="lg:flex  w-full ">
                    <img className=' lg:w-2/5 mx-auto h-96' src="https://img.freepik.com/free-photo/male-hand-with-pen_155003-6453.jpg?size=626&ext=jpg&uid=R81442295&ga=GA1.2.1239272833.1664376337&semt=sph" alt="" />

                    <div className='w-4/5 lg:w-3/6 mx-auto lg:mt-0 mt-3'>
                        <form onSubmit={handleSubmit(handelAddData)}>
                            <div>
                                <span className="text-sm text-gray-900">Hello!!! Rasna</span>
                                <h1 className="text-2xl lg:text-3xl font-bold text-sky-500">Add your Daily task</h1>
                            </div>

                            <div className="my-3">
                                <label className="block text-md mb-2" >Title</label>
                                <input
                                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                                    type="text" placeholder="title"
                                    {...register("title")}
                                    required />
                            </div>
                            <div className="my-3">
                                <label className="block text-md mb-2" >Work details</label>
                                <input
                                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                                    type="text" placeholder="work details"
                                    {...register("workDetails")}
                                    required />
                            </div>

                            <div className="mt-5">
                                <input type="file" 
                                    {...register("img")}
                                    required />
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