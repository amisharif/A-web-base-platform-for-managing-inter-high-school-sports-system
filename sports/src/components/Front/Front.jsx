import React from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Or another import path depending on your setup
import logo from '../../assets/hero.jpg'
import logo1 from '../../assets/hero1.jpg'

const Front = () => {

    
    const handleprimary = () => {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tournament has not been yet started!",
           
        });
    }
    return (
        <div className="bg-slate-200">
            <div className="hero py-12   ">
                <div className="hero-content flex-col lg:flex-row w-3/4">
                    <img
                        src={logo1}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Revolution!</h1>
                        <p className="py-6">
                            Welcome to the Bangladesh Inter-School Football
                            Tournament.We are goint to present you this
                            tournament in a new approach.This tournament will be
                            maintained in an automated system and the fans will
                            be updated through internet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero py-4">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                    <img
                        src={logo}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Football Dreams!</h1>
                        <p className="py-6">
                            You were concerned with International tournaments
                            results.Now you can enjoy our national school
                            tournament result.We will provide team info,match
                            results,every match details,fixutre,standing
                            table,knockout Stage brackets,Players list and their
                            tournament statistics like top scorers,top assists
                            etc.Everything will be managed by national
                            management team lead my govt officers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Front;