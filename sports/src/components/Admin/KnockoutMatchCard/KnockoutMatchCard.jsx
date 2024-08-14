import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';

const KnockoutMatchCard = ({ team1, team2, index }) => {

        const { schoolList } = useContext(AuthContext);

        const filteredItems1 = schoolList.filter((item) =>
            item.id.includes(team1)
        );
        const filteredItems2 = schoolList.filter((item) =>
            item.id.includes(team2)
        );


    return (
        <div className="w-3/4">
            <div className="pl-8">
                <Link to={`/admin/knockoutmatch/${index}`}>
                    <table className="table bg-slate-200">
                        <tbody className="">
                            <tr className="bg-slate-200 border hover:bg-slate-300">
                                <th className="w-2">{index}</th>
                                <td className="w-64">
                                    {filteredItems1[0]?.name}
                            
                                </td>
                                <td className="w-2 text-center">vs</td>
                                <td className="w-64">
                                    {filteredItems2[0]?.name}
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>
        </div>
    );
};

export default KnockoutMatchCard;