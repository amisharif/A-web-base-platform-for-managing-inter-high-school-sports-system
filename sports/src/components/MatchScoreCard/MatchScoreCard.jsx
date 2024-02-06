
import { Link } from 'react-router-dom';
import './MatchScoreCard.css'

const MatchScoreCard = ( {data} ) => {

    
    const {team1,team2,team1Score,team2Score,_id} = data;

    const sty = {
        width:'70%',
        margin:'0 auto',
        marginTop:'5px'
    }
   
    return (

        <Link to={`/matchdetails/${_id}`}>
            <div className='score-card-container bg-slate-900 py-4 px-10 rounded mt-1' style={sty}>
                <div className="socre-card flex text-white">
                    <img src="https://lsm-static-prod.livescore.com/medium/enet/8661.png" alt="" />
                    <h2>{team1}</h2>
                    <h2 className='ml-auto'>{team1Score}</h2>
                </div>
                <div className="socre-card flex  text-white">
                    <img src="https://lsm-static-prod.livescore.com/medium/enet/8661.png" alt="" />
                    <h2 className='text-white'>{team2}</h2>
                    <h2 className='ml-auto'>{team2Score}</h2>
                </div>

            </div>
       </Link>
        
       
       
    );
};

export default MatchScoreCard;