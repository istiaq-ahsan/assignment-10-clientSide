import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyDonatedCard from "../subComponents/MyDonatedCard";

const MyDonation = () => {

    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);

    const email = user.email

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/project/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setDonations(data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }, [user])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                donations.map(donation => <MyDonatedCard key={donation._id}
                    donation={donation}
                ></MyDonatedCard>)
            }
        </div>
    );
};

export default MyDonation;