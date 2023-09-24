import { Fragment } from "react";
import profileImg from "../images/profile.png";
import { json } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store";
const MyProfile = () => {
  return (
    <Fragment>
      <div className="mx-12 mt-11 grid grid-row-4">
        <div className="flex row-start-1 ">
          <div className="w-32 h-32 border boorder-gray-400">
            <img srcSet={profileImg} alt="" srcset="" />
          </div>
          <div className="ml-3 text text-lg">
            <p>ID:78632456320</p>
            <p>User Id:kdhdk123</p>
          </div>
        </div>
        <div className="grid row-start-2   mt-12 border border-gray-300">
          <div className="row-start-1  ">
            <p>Name:Krishnaprasad</p>
            <p className="mt-2">Email:cyvuybunlkm;l</p>
            <p className="mt-2">Ph.no:9785125</p>
            <p className="mt-2">Addr:tsrxydufighlj;cmwd</p>
          </div>
          <div className="col-start-2  gap-2">
            <p className="mt-2">Age:18</p>
            <p className="mt-2">Sex:Male</p>
            <p className="mt-2">Occupied</p>
          </div>
        </div>
        <div className="grid row-start-4 mt-32 gap-2 ">
          <h3>Monthly Payments</h3>
          <p>Wifi:1000</p>
          <p>Car loan:10000</p>
          <p>Milk:1000</p>
        </div>
      </div>
    </Fragment>
  );
};
export default MyProfile;

export async function loader() {
   useSelector((state) => state.userLoginData.token);
  const data = store.getState();
  

  const userDataForFetchExpense = useSelector(
    (state) => state.userLoginData.userData
  );
  const response = await fetch("http://localhost:3000/user/expense", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenData}`,
    },
    body: JSON.stringify({ userId: userDataForFetchExpense }),
  });
  if (!response.ok) {
    throw json({ message: "Could not fetch Expesnse" }, { status: 500 });
  } else {
    const expenseDaa = await response.json();
    // console.log(expenseDaa);
    return expenseDaa;
  }
}
