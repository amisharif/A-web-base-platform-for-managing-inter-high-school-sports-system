import React from 'react';
import './KnockoutStage.css'


const KnockoutStage = () => {
    return (
        <div className="tournament-container">
            <div className="tournament-headers">
                <h3>Round of 16</h3>
                <h3>Quarter-Finals</h3>
                <h3>Semi-Finals</h3>
                <h3>Final</h3>
                <h3>Winner</h3>
            </div>

            <div className="tournament-brackets">
                <ul className="bracket bracket-1">
                    <li className="team-item">A1 vs B2</li>
                    <li className="team-item">A2 vs B1</li>
                    <li className="team-item">C1 vs D2</li>
                    <li className="team-item">C2 vs D1</li>
                    <li className="team-item">E1 vs F2</li>
                    <li className="team-item">E2 vs F1</li>
                    <li className="team-item">G1 vs H2</li>
                    <li className="team-item">G2 vs H1</li>
                </ul>
                <ul className="bracket bracket-2">
                    <li className="team-item">QF1 vs QF2</li>
                    <li className="team-item">QF3 vs QF4</li>
                    <li className="team-item">QF5 vs QF6</li>
                    <li className="team-item">QF7 vs QF8</li>
                </ul>
                <ul className="bracket bracket-3">
                    <li className="team-item">SF1 vs SF2</li>
                    <li className="team-item">SF3 vs SF4</li>
                </ul>
                <ul className="bracket bracket-4">
                    <li className="team-item">Fn1 vs Fn2</li>
                </ul>

                <ul className="bracket bracket-5">
                    <li className="team-item">National Champion</li>
                </ul>
            </div>
        </div>
    );
};

export default KnockoutStage;