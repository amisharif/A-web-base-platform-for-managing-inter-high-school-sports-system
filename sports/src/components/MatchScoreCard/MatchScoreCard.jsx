
import { Link } from 'react-router-dom';
import './MatchScoreCard.css'

const MatchScoreCard = ({ data, schoolList } ) => {

    
    const {_id,homeTeam,awayTeam,homeScore,awayScore} = data;

    const sty = {
        width:'70%',
        margin:'0 auto',
        marginTop:'5px'
    }

    const school1 = schoolList.filter(element => element.id === homeTeam)[0];
    const school2 = schoolList.filter(element => element.id === awayTeam)[0];
    

   
    return (

        <Link to={`/matchdetails/${_id}`}>
            <div className='score-card-container bg-slate-900 py-4 px-10 rounded mt-1' style={sty}>
                <div className="socre-card flex text-white">
                    <img src="https://lsm-static-prod.livescore.com/medium/enet/8661.png" alt="" />
                    <h3 className='text-sm'>{school1?.name}</h3>
                    <h2 className='ml-auto '>{homeScore === -1 ? '--' : homeScore}</h2>
                </div>
                <div className="socre-card flex  text-white">
                    <img src="https://lsm-static-prod.livescore.com/medium/enet/8661.png" alt="" />
                    <h2 className='text-white text-sm'>{school2?.name}</h2>
                    <h2 className='ml-auto'>{homeScore === -1 ? '--' : homeScore}</h2>
                </div>

            </div>
       </Link>
        
    );
};

export default MatchScoreCard;