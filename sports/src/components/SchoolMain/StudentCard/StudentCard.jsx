import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import player_icon from "../../../assets/icons/player-Icon.jpg";


const StudentCard = ({data,player,setPlayer}) => {

    const {name,position,birthId,cls} = data;

   

    const handleDelete = birthId => {
        console.log(birthId);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/playerinfo/${birthId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = player.filter(pl => pl.birthId !== birthId);
                            setPlayer(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl py-4">
            <figure>
                <img src={player_icon} alt="player_icon" />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div className="mt-8">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Brith certificate: {birthId}</p>
                    <p>Class: {cls}</p>
                    <p>Position: {position}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4 mt-4">
                        <Link to={`/updateplayerinfo/${birthId}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(birthId)}
                            className="btn bg-orange-500"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;