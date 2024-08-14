import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import KnockoutMatch from './../Admin/KnockoutMatch/KnockoutMatch';
import useKnockoutMatch from '../customHook/useKnockoutMatch';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

const KnockoutMatchDetails = () => {

    const [KnockoutMatch,refetch] = useKnockoutMatch();
     const { playerInfo, schoolList } = useContext(AuthContext);
    const matchId = useParams();
   
    const id = matchId.matchId;

      const filteredItems = KnockoutMatch.filter((item) =>
          String(item.matchId).includes(id)
      );

       const sn1 = schoolList.filter((item) =>
           item.id.includes(filteredItems[0]?.eiin1)
       );
       const sn2 = schoolList.filter((item) =>
           item.id.includes(filteredItems[0]?.eiin2)
       );

       console.log(sn2);

    return (
        <div className="match-summary-container bg-slate-900 p-10 w-full">
            <div className="flex w-1/2 mx-auto">
                <div className="left w-1/3   items-center justify-end  text-white ">
                    <h2 className="text-4xl ml-24">
                        {filteredItems[0]?.goals_scored1}
                    </h2>
                    <p>{sn1[0]?.name}</p>

                    {/* <img src={logo1} alt="" /> */}
                </div>
                <div className="middle w-1/3 flex flex-col items-center justify-center text-4xl text-white">
                    <h2>vs</h2>
                    {/* <h1>{team1Score}-{team2Score}</h1> */}
                </div>
                <div className="left w-1/3  items-center justify-start  text-white">
                    {/* <img src={logo2} alt="" /> */}
                    <h2 className="text-4xl ml-12">
                        {filteredItems[0]?.goals_scored2}
                    </h2>
                    <p>{sn2[0]?.name}</p>
                </div>
            </div>

            <div className="text-white text-center mt-16 w-1/3 mx-auto border-t-2">
                <h2 className="text-2xl py-4">Timeline</h2>

                {/* {playersInMatch &&
                    playersInMatch.map((data) => (
                        <div
                            className="flex space-x-3 justify-between mt-6 "
                            key={data._id}
                        >
                            <p> {data.name}</p>
                            <p className="text-left">{data.contribution}</p>
                            <p>Time: {data.time}</p>
                        </div>
                    ))} */}
            </div>
        </div>
    );
};

export default KnockoutMatchDetails;