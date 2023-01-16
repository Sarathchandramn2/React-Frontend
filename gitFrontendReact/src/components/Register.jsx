import { useState } from "react";
import { toast } from "react-toastify";
import { Link} from 'react-router-dom'

const Register=()=>{


    
    const[name,namechange]=useState("")
    const[password,passwordchange]=useState("")
    const[full,fullchange]=useState("")
    const[email,emailchange]=useState("")
    const[phone,phonechange]=useState("")


    





    const handlesubmit =(e) => {
        e.preventDefault();
        let regobj={name,password,full,email,phone}
        console.log(regobj)


        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)

        }).then((res)=>{
            alert('Registered sucesfully')
          

        }).catch((err)=>{
            toast.error("failed" + err.message)
        })
    }
    return(
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit} >
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input required  value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input required  value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input required  value={full} onChange={e=>fullchange(e.target.value)}  className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input required  value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input required value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                              
                               
                                

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            {/* <a className="btn btn-danger">Back</a> */}
                            <Link to={'/'} className="btn btn-danger">Close</Link>/
                            
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}
export default Register;