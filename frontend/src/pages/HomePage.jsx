import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const userInfo = useSelector((state) => state.userLoginData.userData);

  return (
    <React.Fragment>
      <div className="box-border mt-2 mx-2 border-2 border-black-200">
        <div>
          <div className="text-xl mt-2 text-center">
            <p>You've Spent in this week</p>
          </div>
          <div className="grid grid-cols-2">
            <div className=" mt-8 flex justify-end items-center mr-12">
              <div className="border border-blue-400 rounded-full w-64 h-64 relative">
                <div className="border border-blue-700 w-56 h-56 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <p className="text text-xl ">$86 So far this month</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center ml-20">
              <div className="border border-cyan-500 w-40 text-xl text-center p-1">
                <p>$15 today</p>
              </div>
              <div className="border border-cyan-600 w-40 text-xl text-center mt-5 p-1">
                <p>$17 yesterday</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-center mt-12">
            <Link>See more</Link>
          </p>
          <table className=" border border-spacing-2 w-full ">
            <tr className="text-xl border border-b-2">
              <td>Groceries</td>
            </tr>
            <tbody className="">
            <tr className="text text-lg">
              <td>Past Average</td>
              <td>This month</td>
              <td>Spent extra</td>
            </tr>
            <tr>
              <td>64.5</td>
              <td>55.5</td>
              <td>80</td>
            </tr>
            </tbody>
            
          </table>
          <table className=" border border-spacing-2 w-full mt-5 ">
            <tr className="text-xl border border-b-2">
              <td>Groceries</td>
            </tr>
            <tbody className="">
            <tr className="text text-lg">
              <td>Past Average</td>
              <td>This month</td>
              <td>Spent extra</td>
            </tr>
            <tr>
              <td>64.5</td>
              <td>55.5</td>
              <td>80</td>
            </tr>
            </tbody>
            
          </table>
          <p className="text-lg text-center mt-8">
            <Link>See more</Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomePage;

// export async function loader({request,params}){
//   const id = params.name;
//   console.log(id);
//   console.log('hii');
//   const response = await fetch('http://localhost:3000/user/'+id);
//   // console.log(response);
//   if (!response.ok) {
//     throw json({
//         message:'Could not fetch events.'
//     },{status:500})
//     } else {

//       return response;
//     }

// }
