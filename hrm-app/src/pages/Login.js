import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../store/features/personelSlice";
 
function Login(){

    const dispatch = useDispatch();   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const login = ()=>{
        dispatch(fetchLogin({email,password})).then((data)=>{   
            console.log(data)
        });
    }

    return(
        <div className="container border border-primary mt-5 wrapper fadeInDown" style={{width: '400px', height: '350px'}}>
            <div>
                <h1 className='text-center mt-2 p-2'>Login</h1>
            </div>
            <form>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input onChange={(evt)=>{setEmail(evt.target.value)}} type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input onChange={(evt)=>{setPassword(evt.target.value)}} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >Check me out</label>
            </div>
            <div className="text-center">
                <button onClick={login}  className="btn btn-primary text-end">Submit</button>                      
            </div>
            <div>
                <a href="/register">Register</a>
                <a href="/forgotPassword">Forgot Password</a>
            </div>
            </form>
        </div>
    )
}
 
export default Login;