import React from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Or another import path depending on your setup


const Front = () => {


    const handleprimary = () => {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tournament has not been yet started!",
           
        });
    }
    return (
        <div className='mt-9'>
            <div className="flex justify-center space-x-6">
                <div className="">
                    <div className="card w-96 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Inter-Primary School</h2>
                            <div className="card-actions">
                                <button onClick={handleprimary} className="btn btn-primary">Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card w-96 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Inter-High School</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card w-96 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Inter-College</h2>
                            <div className="card-actions">
                                <button onClick={handleprimary} className="btn btn-primary">Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Front;