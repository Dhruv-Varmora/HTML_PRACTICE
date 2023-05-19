
import { useRef } from "react";


const FormValidation =  () =>  {
    const name =  useRef('')
    const email =  useRef('')
    const password =  useRef('')
    const mobile = useRef('')
   
    const submitclck = ()=>{
        if(!name.current.value)
        {
            console.log("enter name");
        }
        if(!email.current.value)
        {
            console.log("enter email");
        }
        if(!password.current.value)
        {
            console.log("enter password");
        }
        if(!mobile.current.value)
        {
            console.log("enter mobile");
        }

    }
 
   
   
    return (
        <div>
            <div className="container mt-3">
                
                <div className="mb-3 mt-3">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter name" name="name" ref={name} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={email}/>
                </div>
                <div className="mb-3">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={password}/>
                </div>
                <div className="mb-3">
                    <label for="pwd">mobile</label>
                    <input type="mobile" className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" ref={mobile}/>
                </div>
               <div>

                <button type="submit" className="btn btn-primary" value="submit" onClick={submitclck}>Submit</button>
               </div>
            </div>
        </div>
    )
}

export default FormValidation;
