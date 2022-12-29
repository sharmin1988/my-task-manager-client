import React from 'react';
import PrimaryBtn from '../../components/PrimaryBtn';

const CompleteTaskCard = ({ task, handelDelete, handelNotComplete }) => {

    const { title, workDetails,  img, _id} = task

    return (
        <div className="flex flex-col max-w-md p-3 space-y-6 overflow-hidden rounded border  text-gray-900">
            <div>
                <img src={img} alt="" className="w-full mb-4 sm:h-60" />
                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-900">{workDetails}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <button aria-label="" type="button" className="p-2 text-center text-sky-600 font-bold hover:text-sky-400">
                        Comment
                    </button>
                    <button onClick={() => handelDelete(_id)} aria-label="" type="button" className="p-2 text-red-600 font-bold hover:text-red-400">
                        delete
                    </button>
                </div>
                <div className="flex space-x-2 text-sm text-gray-900">
                     <button onClick={() => handelNotComplete(_id)}>
                                <PrimaryBtn>Not Completed</PrimaryBtn>
                            </button>

                </div>
            </div>
        </div>
    );
};

export default CompleteTaskCard;