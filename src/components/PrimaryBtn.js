import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
            <button className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none">{children}</button>
        </div>
    );
};

export default PrimaryBtn;