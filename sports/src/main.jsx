import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MatchScore from "./components/MatchScore/MatchScore.jsx";
import MatchDetails from "./components/MatchDetails/MatchDetails.jsx";
import AuthProvider from "./components/Auth/AuthProvider/AuthProvider.jsx";
import OfficeRegister from "./components/AccessControl/Register/OfficeRegister.jsx";
import OfficeLogin from "./components/AccessControl/Login/OfficeLogin.jsx";
import PrivateRoute from "./components/Route/PrivateRoute.jsx";
import Admin from "./components/Admin/Admin.jsx";
import AddSchool from "./components/Admin/AddSchool/AddSchool.jsx";
import { element } from "prop-types";
import ShowSchool from "./components/Admin/ShowSchool/ShowSchool.jsx";
import SchoolInfo from "./components/Admin/SchoolInfo/SchoolInfo.jsx";
import ShowTeamInfo from "./components/SchoolMain/ShowTeamInfo/ShowTeamInfo.jsx";
import UpdatePlayerInfo from "./components/SchoolMain/UpdatePlayerInfo/UpdatePlayerInfo.jsx";
import AddPlayer from "./components/SchoolMain/AddPlayer/AddPlayer.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Stat from "./components/Statistics/Stat.jsx";
import Standing from "./components/Standing/Standing.jsx";
import AddMatch from "./components/AddMatch/AddMatch.jsx";
import Front from "./components/Front/Front.jsx";
import MatchesList from "./components/Extra/Extra.jsx";
import Fixture from "./components/Admin/Fixture/Fixture.jsx";
import Login from "./components/AccessControl/Login/Login.jsx";
import KnockoutStage from "./components/Standing/KnockoutStage/KnockoutStage.jsx";
import GroupStage from "./components/Standing/GroupStage/GroupStage.jsx";
import Players from "./components/Players/Players.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Management from "./components/Management/Management.jsx";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";
import EditSchool from "./components/Admin/EditSchool/EditSchool.jsx";
import History from "./components/History/History.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import KnockoutMatch from "./components/Admin/KnockoutMatch/KnockoutMatch.jsx";
import AddKnockoutMatch from "./components/Admin/AddKnockoutMatch/AddKnockoutMatch.jsx";
import QuarterFinal from "./components/Admin/QuarterFinal/QuarterFinal.jsx";
import KnockoutMatchTop from "./components/Admin/KnockoutMatchTop/KnockoutMatchTop.jsx";
import SemiFinal from "./components/Admin/SemiFinal/SemiFinal.jsx";
import Final from "./components/Admin/Final/Final.jsx";
import FinalEnd from "./components/Admin/FinalEnd/FinalEnd.jsx";
import MatchScoreTop from "./components/MatchScoreTop/MatchScoreTop.jsx";
import MatchScoreLeft from "./components/MatchScoreLeft/MatchScoreLeft.jsx";
import AllScore from "./components/AllScore/AllScore.jsx";
import ScoreQuarterFinal from "./components/ScoreQuarterFinal/ScoreQuarterFinal.jsx";
import ScoreSemiFinal from "./components/ScoreSemiFinal/ScoreSemiFinal.jsx";
import ScoreRoundof16 from "./components/ScoreRoundof16/ScoreRoundof16.jsx";
import ScoreFinal from "./components/ScoreFinal/ScoreFinal.jsx";
import Roundof16 from "./components/Admin/Roundof16/Roundof16.jsx";
import UpdateScoreGroupStage from "./components/Admin/UpdateScoreGroupStage/UpdateScoreGroupStage.jsx";
import KnockoutMatchDetails from "./components/KnockoutMatchDetails/KnockoutMatchDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Front></Front>,
            },
            {
                path: "/matchscore",
                element: <AllScore></AllScore>,
                loader: () => fetch("https://server-tau-ashen.vercel.app/matchscore"),
                children: [
                    {
                        path: "/matchscore/1stround",
                        element: <MatchScore></MatchScore>,
                    },
                    {
                        path: "/matchscore/roundof16",
                        element: <ScoreRoundof16></ScoreRoundof16>,
                    },
                    {
                        path: "/matchscore/qfinal",
                        element: <ScoreQuarterFinal></ScoreQuarterFinal>,
                    },
                    {
                        path: "/matchscore/sfinal",
                        element: <ScoreSemiFinal></ScoreSemiFinal>,
                    },
                    {
                        path: "/matchscore/final",
                        element: <ScoreFinal></ScoreFinal>,
                    },
                ],
            },
            {
                path: "/matchdetails/:matchId",
                element: <MatchDetails></MatchDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://server-tau-ashen.vercel.app/playersinmatch/${params.matchId}`
                    ),
            },
            {
                path: "/matchdetails/knockout/:matchId",
                element: <KnockoutMatchDetails></KnockoutMatchDetails>,
               
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch("https://server-tau-ashen.vercel.app/statistics"),
            },
            {
                path: "/players",
                element: <Players></Players>,
                loader: () => fetch("https://server-tau-ashen.vercel.app/playerinfo"),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
                loader: () => fetch("https://server-tau-ashen.vercel.app/playerinfo"),
            },
            {
                path: "/management",
                element: <Management></Management>,
                loader: () => fetch("https://server-tau-ashen.vercel.app/playerinfo"),
            },
            {
                path: "/history",
                element: <History></History>,
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>,
            },
            {
                path: "/standing",
                element: <Standing></Standing>,
                //loader: () => fetch('https://server-tau-ashen.vercel.app/standing')
                // loader: () => fetch('https://server-tau-ashen.vercel.app/standdataa')

                children: [
                    {
                        path: "/standing/groupstage",
                        element: <GroupStage></GroupStage>,
                    },
                    {
                        path: "/standing/knockoutstage",
                        element: <KnockoutStage></KnockoutStage>,
                    },
                ],
            },

            {
                path: "/register",
                element: <OfficeRegister></OfficeRegister>,
            },
            {
                path: "/addmatch",
                element: <AddMatch></AddMatch>,
            },
            {
                path: "/teaminfo",
                element: (
                    <PrivateRoute>
                        <ShowTeamInfo></ShowTeamInfo>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://server-tau-ashen.vercel.app/teaminfo`),
            },
            {
                path: "/players/:eiin",
                // element: <PrivateRoute><ShowTeamInfo></ShowTeamInfo></PrivateRoute>,
                element: <ShowTeamInfo></ShowTeamInfo>,
                loader: ({ params }) =>
                    fetch(`https://server-tau-ashen.vercel.app/players/${params.eiin}`),
            },

            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/updateplayerinfo/:birthid",
                element: <UpdatePlayerInfo></UpdatePlayerInfo>,
                loader: ({ params }) =>
                    fetch(`https://server-tau-ashen.vercel.app/playerinfo/${params.birthid}`),
            },

            {
                path: "/addplayer",
                element: <AddPlayer></AddPlayer>,
            },

            {
                path: "/admin",
                // element: <PrivateRoute><Admin></Admin></PrivateRoute>,
                element: <Admin></Admin>,
                children: [
                    {
                        path: "/admin/addschool",
                        element: <AddSchool></AddSchool>,
                    },
                    {
                        path: "/admin/createfixture",
                        element: <Fixture></Fixture>,
                        loader: () => fetch(`https://server-tau-ashen.vercel.app/groupclone`),
                    },
                    {
                        path: "/admin/createfixture/:matchid",
                        element: <AddMatch></AddMatch>,
                    },

                    {
                        path: "/admin/showschool",
                        element: <ShowSchool></ShowSchool>,
                        loader: () => fetch(`https://server-tau-ashen.vercel.app/showschool`),
                    },
                    {
                        path: "/admin/showschool/:id",
                        element: <ShowTeamInfo></ShowTeamInfo>,
                        loader: ({ params }) =>
                            fetch(`https://server-tau-ashen.vercel.app/players/${params.id}`),
                    },
                    {
                        path: "/admin/editschool/:id",
                        loader: ({ params }) =>
                            fetch(
                                `https://server-tau-ashen.vercel.app/showschool/${params.id}`
                            ),
                        element: <EditSchool></EditSchool>,
                    },
                    {
                        path: "/admin/knockoutmatch",
                        // element: <KnockoutMatch></KnockoutMatch>,
                        element: <KnockoutMatchTop></KnockoutMatchTop>,

                        children: [
                            {
                                path: "/admin/knockoutmatch/groupstage",
                                element: (
                                    <UpdateScoreGroupStage></UpdateScoreGroupStage>
                                ),
                            },
                            {
                                path: "/admin/knockoutmatch/roundof16",
                                element: <Roundof16></Roundof16>,
                            },
                            {
                                path: "/admin/knockoutmatch/qfinal",
                                element: <QuarterFinal></QuarterFinal>,
                            },
                            {
                                path: "/admin/knockoutmatch/sfinal",
                                element: <SemiFinal></SemiFinal>,
                            },
                            {
                                path: "/admin/knockoutmatch/final",
                                element: <Final></Final>,
                            },
                            {
                                path: "/admin/knockoutmatch/finalend",
                                element: <FinalEnd></FinalEnd>,
                            },
                        ],
                    },
                    {
                        path: "/admin/knockoutmatch/:id",
                        element: <AddKnockoutMatch></AddKnockoutMatch>,
                    },
                ],
            },
        ],
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
