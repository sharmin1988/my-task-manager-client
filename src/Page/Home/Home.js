import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../components/PrimaryBtn';

const Home = () => {
    return (
        <div className='my-24'>
            <section className="flex items-center ">
                <div className="flex flex-col w-full ">
                <p className="max-w-3xl mx-auto mb-6 font-bold text-lg text-center text-sky-700 dark:text-white md:text-xl">
                       Welcome to ...
                    </p>
                    <h1 className="text-4xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                            My Task
                        </span>

                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                            Manager
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Fugit alias nihil incidunt.
                    </p>

                    <div className=" mt-8 text-center ">
                        <Link to= '/addTask'><PrimaryBtn>Let's add some Task</PrimaryBtn></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;