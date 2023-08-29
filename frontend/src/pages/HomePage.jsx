import React from "react";
// import { json, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
const HomePage = () => {
  const userInfo = useSelector(state=>state.userExpenseData.userData);
  // const user = useLoaderData();
  console.log(userInfo);
  return(
    <React.Fragment>
        <div>
          <h1>heloo
          </h1>
            
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