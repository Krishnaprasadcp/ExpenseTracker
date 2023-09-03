import pic from "../images/loginImg.jpg";
import { Fragment } from "react";
import classes from "./css/loginCss.module.css";
import { Form } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [isNextExpenseDetail, setNextExpenseDetail] = useState(false);
  //AddExpenseShown Form
  const [isFormShow, setFormShow] = useState(false);
  //expenseFOrmData
  const[date,setDate]=useState('');
  const[amount,setAmount]=useState('');
  const[category,setCategory]=useState('')
  console.log({amount,category,date});
  const nextClickHandler = () => {
    setNextExpenseDetail(true);
  };
  const prevClickHandler = () => {
    setNextExpenseDetail(false);
  };
  const showFormButtonHandler = () => {
    setFormShow(true);
  };
  const saveExpenseButtonHandler = () => {
    setFormShow(false);
  };
  const cancelExpenseButtonHandler = () => {
    setFormShow(false);
  };
  return (
    <Fragment>
      <div className="grid grid-cols-2">
        <div>
          <img className={classes.wid} src={pic} alt="" />
        </div>
        <div className="text  text-center border border-gray-400 m-5">
          <div className="text-2xl mt-8">
            <h4>SignUp For Your Account</h4>
          </div>
          <Form className="w-full mt-8 flex flex-col gap-4">
            {!isNextExpenseDetail && (
              <>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="border border-gray-300 w-64 rounded-lg"
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    name=""
                    placeholder="Re-Enter"
                  />
                </div>
                <div>
                  <textarea
                    className="border border-gray-300 w-64 rounded-lg"
                    placeholder="Address"
                    rows="4"
                    cols="32"
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="tel"
                    maxLength="10"
                    placeholder="PhoneNumber"
                  />
                </div>
                <div>
                  <select name="sex" className="border rounded-lg w-64">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="null">Nill</option>
                  </select>
                </div>
              </>
            )}

            {isNextExpenseDetail && (
              <>
                <div className="m-auto w-2/4">
                  <div className="border border-gray-400 ">
                    <h3>Add Your Monthly Expense</h3>
                    <h4 className="mt-3">
                      If you have one add it or Click SUBMIT
                    </h4>
                    <div>
                      <div>
                        <table className="mt-3 border border-gray-300 w-72 m-auto">
                          <thead>
                            <tr>
                              <td>Category</td>
                              <td>Amount</td>
                              <td>Date</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{category}</td>
                              <td>{amount}</td>
                              <td>{date}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <button
                      className=" mt-2 w-16 rounded-md bg-cyan-600 text text-white"
                      onClick={showFormButtonHandler}
                    >
                      Add+
                    </button>
                    {isFormShow && (
                      <div className="border border-green w-64 m-auto mt-2">
                        <div className="grid grid-rows-2 gap-2 place-itmes-center">
                        <input className="block" type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="Catagory" />
                        <input className="block" type="text" onChange={(e)=>setAmount(e.target.value)} placeholder="Enter the Amount" />
                        </div>
                        <div className="grid grid-rows-2 place-items-start">
                          <label   htmlFor="sdate">Payment Date: </label>
                          <input onChange={(e)=>setDate(e.target.value)}  type="date" id="sdate" />
                        </div>
                        <div className="flex justify-evenly mt-4">
                        <button className="border border-gray-400 rounded-xl w-16" onClick={saveExpenseButtonHandler}>Save</button>
                        <button className="border border-gray-400 rounded-xl w-16" onClick={cancelExpenseButtonHandler}>
                          Cancel
                        </button>
                        </div>
                      </div>
                    )}
                    <input type="text" />
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-between w-64 m-auto">
              <button onClick={prevClickHandler}>Prev</button>
              <button onClick={nextClickHandler}>Next</button>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};
export default Signup;
