import { getAuth } from "firebase/auth";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../Auth/Firebase/Firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";


const AddPlayer = () => {



    const {user} =useContext(AuthContext);

    console.log(user)

    const handleAddPlayer = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const birthId = form.birthId.value;
        const position = form.position.value;
        const cls = form.cls.value;
        const photo = form.photo.value;
        const schoolId = user.eiin;

        const playerData = { name, birthId, position, cls, schoolId,photo }

        console.log(playerData);



        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerData),
        };

        fetch(`http://localhost:3000/playerinfo`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response:', data);
                if (data.insertedId ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Player Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add New Player: </h2>
            <form onSubmit={handleAddPlayer}>
                {/* form name and quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Player Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Player Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Birth Certificate</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="birthId" placeholder="Birth Certificate" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Class</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cls" placeholder="Class" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Position</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="position" placeholder="Position" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}

                {/* form Photo url row */}
                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block bg-slate-300" />

            </form>
        </div>
    );
};

export default AddPlayer;