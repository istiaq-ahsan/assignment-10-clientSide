import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyDonatedCard from "../subComponents/MyDonatedCard";
import { Helmet } from "react-helmet-async";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [filterDonations, setFilterDonations] = useState([]);

  const email = user.email;

  useEffect(() => {
    if (user && user.email) {
      fetch("http://localhost:5000/donations")
        .then((res) => res.json())
        .then((data) => {
          const userDonations = data.filter(
            (donation) => donation.userEmail == user.email
          );
          setFilterDonations(userDonations);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [user]);

  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>Crowdcube || My Donation</title>
      </Helmet>
      <div
        className="w-4/5 mx-auto py-20 grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {filterDonations.map((donation) => (
          <MyDonatedCard key={donation._id} donation={donation}></MyDonatedCard>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
