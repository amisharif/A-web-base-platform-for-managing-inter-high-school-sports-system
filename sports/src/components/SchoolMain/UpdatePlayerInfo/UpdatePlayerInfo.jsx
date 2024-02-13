import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePlayerInfo = () => {


    const singleUpdate = useLoaderData();
    const {name,birthId,email,cls,position} = singleUpdate;


    const handleUpdateCoffee = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const birthId = form.birthId.value;
        const position = form.position.value;
        const cls = form.cls.value;
        const photo = form.photo.value;

        const updatedPlayerInfo = { name, birthId, position, cls,photo}

       // console.log(updatedStudentInfo);


    
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPlayerInfo),
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
                if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Updated Successfully',
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
            <h2 className="text-3xl font-extrabold">Update Player Info: </h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Player Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Birth Certificate</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="birthId" defaultValue={birthId} disabled placeholder="Available Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="cls" defaultValue={cls} placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Position</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="position" defaultValue={position} placeholder="Taste" className="input input-bordered w-full" />
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
                <input type="submit" value="Update Info" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdatePlayerInfo;