import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useKnockoutMatch from '../../customHook/useKnockoutMatch';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import useAxiosSecure from '../../useAxiosSecure/useAxiosSecure';
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";


const AddKnockoutMatch = () => {

    const parm = useParams().id;
    const [knockoutMatch,refetch] = useKnockoutMatch();
    const {schoolList} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

   // console.log(knockoutMatch[parm]);

    const eiin1 = knockoutMatch[parm]?.eiin1;
    const eiin2 = knockoutMatch[parm]?.eiin2;

    const getSchool1 = schoolList.filter(
        (item) => item.id === eiin1
    );
     const getSchool2 = schoolList.filter((item) => item.id === eiin2);
    



    
    const [score1, setScore1] = React.useState(0);
    const [formation1, setFormation1] = React.useState("");

    // const [teamId2, setTeamId2] = React.useState("");
    const [score2, setScore2] = React.useState(0);
    const [formation2, setFormation2] = React.useState("");

    const matchData = {
        score1,formation1,score2,formation2,matchId:parm
    }
    
    const handleMatchSubmit = (e)=>{
         e.preventDefault();
        // console.log(matchData)


        axiosSecure.post(`/updateknockoutmatch`, matchData).then((res) => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });

        
    }



    return (
        <div className="bg-slate-200 w-full">
            <h3>Add knockout match</h3>

            <form className="space-y-4  mx-auto bg-slate-300 w-3/4 p-10 rounded mt-4">
                {/* --------------------------------------team 1 ------------------------------------- */}
                <div className="text-center font-bold font-serif">
                    {getSchool1[0]?.name}
                </div>

                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block text-left">
                        Score:
                    </label>
                    <input
                        type="number"
                        id="score1"
                        name="score1"
                        value={score1}
                        // placeholder={score1}
                        onChange={(event) =>
                            setScore1(parseInt(event.target.value))
                        }
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="formation" className="w-24 block text-left">
                        Formation:
                    </label>
                    <select
                        id="formation1"
                        name="formation1"
                        value={formation1}
                        onChange={(event) => setFormation1(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >
                        <option value="">Select Formation</option>
                        {/* Add your actual formation options here */}
                        <option value="4-4-2">4-4-2</option>
                        <option value="4-3-3">4-3-3</option>
                        {/* ... more options */}
                    </select>
                </div>

                {/* ------------------------------------Team 2-------------------------------------- */}

                <div className="text-center font-bold font-serif">
                    {getSchool2[0]?.name}
                </div>

                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block text-left">
                        Score:
                    </label>
                    <input
                        type="number"
                        id="score2"
                        name="score2"
                        value={score2}
                        onChange={(event) =>
                            setScore2(parseInt(event.target.value))
                        }
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="formation" className="w-24 block text-left">
                        Formation:
                    </label>
                    <select
                        id="formation2"
                        name="formation2"
                        value={formation2}
                        onChange={(event) => setFormation2(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >
                        <option value="">Select Formation</option>
                        {/* Add your actual formation options here */}
                        <option value="4-4-2">4-4-2</option>
                        <option value="4-3-3">4-3-3</option>
                        {/* ... more options */}
                    </select>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={handleMatchSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md"
                    >
                        Update Match Score
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddKnockoutMatch;