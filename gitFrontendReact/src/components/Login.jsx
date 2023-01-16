import {useState} from 'react'
import { Link} from 'react-router-dom'



const Login =()=>{
    const [username,usernameupdate] = useState('');
    const [password,passwordupdate] = useState('');
    


const Handleclick =(e)=>{
    e.preventDefault();
    if(Validate()){
        console.log("proceed")
        fetch("http://127.0.0.1:8001/accounts/api/auth/",{
             method:"POST",
            headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'*'},
            body:JSON.stringify({username:username,password:password})

        }).then((res)=>{
            console.log(res)
            return res.json(); 
           
        }).then((resp)=>{
            // console.log(resp)
            if(resp && resp.token){
                localStorage.setItem("currentUser",JSON.stringify(resp));
                alert("sucess")
                window.location.href='http://localhost:3000/home'
              }
            else{
                alert("failed")
 
            }
        }).catch((err)=>{
            alert("login failed" +err.message)
        })
    }
}
   

const Validate =()=>{

    let result =true;

    if(username === '' || password === '' ) {

        result = false;

        alert('Please enter the username and password')
        }
        return result;
    
    }
    return(
        <div>
         <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={Handleclick} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input   type ='text 'value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input  type ='password'value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                                
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary"  >Login</button> |
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}




export default Login;
