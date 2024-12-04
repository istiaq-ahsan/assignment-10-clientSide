import { createBrowserRouter } from "react-router-dom";
import Layout from "../static/Layout";
import HomePage from "../Home/HomePage";
import AllCampaign from "../components/AllCampaign";
import MyCampaign from "../components/MyCampaign";
import AddNewCampaign from "../components/AddNewCampaign";
import MyDonation from "../components/MyDonation";
import CampaignDetails from "../subComponents/CampaignDetails";
import Login from "../authenticationPage/Login";
import Register from "../authenticationPage/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "allCampaign",
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch("http://localhost:5000/project")
            },
            {
                path: "myCampaign",
                element: <MyCampaign></MyCampaign>,
            },
            {
                path: "addNewCampaign",
                element: <AddNewCampaign></AddNewCampaign>,
            },
            {
                path: "myDonation",
                element: <MyDonation></MyDonation>,
            },
            {
                path: "campaignDetails/:id",
                element: <CampaignDetails></CampaignDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            }
        ]
    },
])

export default Router;