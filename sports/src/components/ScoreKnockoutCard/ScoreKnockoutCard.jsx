import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import football1 from "../../assets/icons/football.png"

const ScoreKnockoutCard = ({ data }) => {
    const { _id, eiin1, eiin2, goals_scored1, goals_scored2, matchId } = data;

    const {schoolList} = useContext(AuthContext);

    

    const sty = {
        width: "70%",
        margin: "0 auto",
        marginTop: "5px",
    };

    const school1 = schoolList.filter((element) => element.id === eiin1);
    const school2 = schoolList.filter((element) => element.id === eiin2);



    return (
        <Link to={`/matchdetails/knockout/${matchId}`}>
            <div
                className="score-card-container bg-cyan-900 py-4 px-10 rounded mt-1"
                style={sty}
            >
                <div className="text-white">
                    <p>{matchId}</p>
                </div>
                <div className="socre-card flex text-white">
                    <img src={football1} alt="" className="mr-2" />
                    <h3 className="text-sm">{school1[0]?.name}</h3>
                    <h2 className="ml-auto ">
                        {goals_scored1}
                        {/* {homeScore === -1 ? "--" : homeScore} */}
                    </h2>
                </div>
                <div className="socre-card flex  text-white">
                    <img src={football1} alt="" className="mr-2" />
                    <h2 className="text-white text-sm">{school2[0]?.name}</h2>
                    <h2 className="ml-auto">
                        {/* {awayScore === -1 ? "--" : awayScore} */}
                        {goals_scored2}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default ScoreKnockoutCard;
