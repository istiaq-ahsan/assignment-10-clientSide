import { createBrowserRouter } from "react-router-dom";
import Layout from "../static/Layout";
import AllCampaign from "../components/AllCampaign";
import MyCampaign from "../components/MyCampaign";
import AddNewCampaign from "../components/AddNewCampaign";
import MyDonation from "../components/MyDonation";
import CampaignDetails from "../subComponents/CampaignDetails";
import Login from "../authenticationPage/Login";
import Register from "../authenticationPage/Register";
import PrivateRouter from "./PrivateRouter";
import UpdateCampaign from "../components/UpdateCampaign";
import Home from "../components/Home";
import Error from "../static/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allCampaign",
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch("http://localhost:5000/project")
            },
            {
                path: "myCampaign",
                element: <PrivateRouter>
                    <MyCampaign></MyCampaign>
                </PrivateRouter>
            },
            {
                path: "addNewCampaign",
                element: <PrivateRouter>
                    <AddNewCampaign></AddNewCampaign>
                </PrivateRouter>
            },
            {
                path: "myDonation",
                element: <PrivateRouter>
                    <MyDonation></MyDonation>
                </PrivateRouter>
            },
            {
                path: "campaignDetails/:id",
                element: <PrivateRouter>
                    <CampaignDetails></CampaignDetails>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
            },
            {
                path: "updateCoffee/:id",
                element: <PrivateRouter>
                    <UpdateCampaign></UpdateCampaign>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    },
])

export default Router;