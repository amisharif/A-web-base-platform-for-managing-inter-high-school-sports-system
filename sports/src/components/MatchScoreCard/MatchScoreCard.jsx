
import { Link } from 'react-router-dom';
import './MatchScoreCard.css'
import football1 from "../../assets/icons/football.png";

const MatchScoreCard = ({ data, schoolList } ) => {

    
    const {_id,homeTeam,awayTeam,homeScore,awayScore,matchId} = data;

    const sty = {
        width:'70%',
        margin:'0 auto',
        marginTop:'5px'
    }

    const school1 = schoolList.filter(element => element.id === homeTeam)[0];
    const school2 = schoolList.filter(element => element.id === awayTeam)[0];
    

   
    return (
        <Link to={`/matchdetails/${data.matchId}`}>
            <div
                className="score-card-container bg-cyan-900 py-4 px-10 rounded mt-1"
                style={sty}
            >
                <div className="text-white">
                    <p>{matchId}</p>
                </div>
                <div className="socre-card flex text-white">
                    <img src={football1} alt="" className='mr-2'/>
                    <h3 className="text-sm">{school1?.name}</h3>
                    <h2 className="ml-auto ">
                        {/* {homeScore} */}
                        {homeScore === -1 ? "--" : homeScore}
                    </h2>
                </div>
                <div className="socre-card flex  text-white">
                    <img src={football1} alt=""  className='mr-2'/>
                    <h2 className="text-white text-sm">{school2?.name}</h2>
                    <h2 className="ml-auto">
                        {awayScore === -1 ? "--" : awayScore}
                        {/* {awayScore} */}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default MatchScoreCard;