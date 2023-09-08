import pic from "../images/loginImg.jpg";
import { Fragment } from "react";
import classes from "./css/loginCss.module.css";
import { Form } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignupActions } from "../store/userSignUpSlice";
import { useSelector } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch();
  const [isNextExpenseDetail, setNextExpenseDetail] = useState(false);
  //AddExpenseShown Form
  const [isFormShow, setFormShow] = useState(false);
  //expenseFOrmData
  const[date,setDate]=useState('');
  const[amount,setAmount]=useState();
  const[category,setCategory]=useState('')
//for incrementing 
const [increment,setIncrement]=useState(1);
  //form datas
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    rePassword: '',
    address: '',
    phoneNumber: '',
    sex: 'male', 
  });
  const nextClickHandler = () => {
    window.confirm("Are You sure want to continue ?");
    dispatch(userSignupActions.addUserInfo(formData));
    setNextExpenseDetail(true);
  };
  const prevClickHandler = () => {
    setNextExpenseDetail(false);
  };
  const showFormButtonHandler = () => {
    setFormShow(true);
  };
  

  function incrementer(){
      
    return increment; 
  
  }

  const monthlyExpenseData={
    id:'exp'+incrementer(),category,amount,date
  }
  const saveExpenseButtonHandler = () => {
    setIncrement(increment+1);
    setFormShow(false);
    dispatch(userSignupActions.addMonthlyExpense(monthlyExpenseData));

  };
  const cancelExpenseButtonHandler = () => {
    setFormShow(false);
  };
 
  const addedExpense = useSelector(state=>state.userExpennseSignup.monthlyExpense);

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
          <Form method="post" className="w-full mt-8 flex flex-col gap-4">
            {!isNextExpenseDetail && (
              <>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="border border-gray-300 w-64 rounded-lg"
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="text"
                    name="rePassword"
                    placeholder="Re-Enter Password"
                    onChange={(e) => setFormData({ ...formData, rePassword: e.target.value })}
                  />
                </div>
                <div>
                  <textarea
                    className="border border-gray-300 w-64 rounded-lg"
                    placeholder="Address"
                    name="address"
                    rows="4"
                    cols="32"
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-64 rounded-lg"
                    type="tel"
                    name="phoneNumber"
                    maxLength="10"
                    placeholder="PhoneNumber"
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>
                <div>
                  <select name="sex" className="border rounded-lg w-64"
                  onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="null">Nill</option>
                  </select>
                </div>
              </>
            )}

            {isNextExpenseDetail && (
              <>
                <div className="m-auto w-full sm:w-5/6 lg:w-3/4">
                  <div className="border border-gray-400 ">
                    <h3>Add Your Monthly Expense</h3>
                    <h4 className="mt-3">
                      If you have one add it or Click SUBMIT
                    </h4>
                    <>
                   
                        <table className="w-auto mt-3 text text-lg m-auto border-collapse border border-slate-500">
                          <thead>
                            <tr className="border border-slate-500">
                              <td className="border border-slate-500 px-2">Category</td>
                              <td className="border border-slate-500 px-2">Amount</td>
                              <td className="border border-slate-500">Date</td>
                            </tr>
                          </thead>
                          <tbody>
                           {addedExpense.map(data=>(
                             <tr key={data.id}>
                             <td className="border border-slate-500">{data.category}</td>
                             <td className="border border-slate-500">{data.amount}</td>
                             <td className="border border-slate-500">{data.date}</td>
                           </tr>
                           ))}
                          </tbody>
                        </table>
                     
                    </>
                    <button
                      type="button"
                      className=" mt-2 w-16 rounded-md bg-cyan-600 text text-white"
                      onClick={showFormButtonHandler}
                    >
                      Add+
                    </button>
                    {isFormShow && (
                      <div className="m-auto mt-2 ">
                        <div className="grid grid-rows-2 gap-2 place-itmes-center m-auto">
                        <input className="block border border-gray-400 mx-2" type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="Catagory" />
                        <input className="block border border-gray-400 mx-2" type="text" onChange={(e)=>setAmount(e.target.value)} placeholder="Enter the Amount" />
                        </div>
                        <div className="grid grid-rows-2 place-items-start mx-2">
                          <label   htmlFor="sdate">Payment Date: </label>
                          <input className="border border-gray-400" onChange={(e)=>setDate(e.target.value)}  type="date" id="sdate" />
                        </div>
                        <div className="flex justify-evenly mt-4">
                        <button type="button" className="border border-gray-400 rounded-xl w-16" onClick={saveExpenseButtonHandler}>Save</button>
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
              <button className={!isNextExpenseDetail ? 'cursor-not-allowed':'cursor-pointer'} disabled={!isNextExpenseDetail} onClick={prevClickHandler}>Prev</button>
              <button  className={!isNextExpenseDetail ? 'cursor-not-allowed':'cursor-pointer'} type="submit" >Submit</button>
              <button className={isNextExpenseDetail ? 'cursor-not-allowed':'cursor-pointer'} disabled={isNextExpenseDetail} onClick={nextClickHandler}>Next</button>
            </div>
          </Form>
        </div>
      </div>
      
    </Fragment>
  );
};
export default Signup;
