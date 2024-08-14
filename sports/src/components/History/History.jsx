import React from "react";

function History() {
    return (
        <div className=" w-[750px] m-auto mt-12 h-[1200px]">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SEASON</th>
                            <th>CHAMPION</th>
                            <th>ORGANIZER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>2021-2022</th>
                            <td>Dhaka Collegiate School</td>
                            <td>Ministry of Youth and Sports</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2020-2021</th>
                            <td>Barisal Zilla School</td>
                            <td>Ministry of Youth and Sports</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="bg-base-200">
                            <th>2019-2020</th>
                            <td>Rajuk Uttara Model School & College </td>
                            <td>Ministry of Youth and Sports</td>
                        </tr>
                        <tr className="">
                            <th>2018-2019</th>
                            <td>Rangpur Government Boys' High School </td>
                            <td>Ministry of Youth and Sports</td>
                        </tr>
                        <tr className="bg-base-200">
                            <th>2017-2018</th>
                            <td>Rajshahi Collegiate School</td>
                            <td>Ministry of Youth and Sports</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default History;
