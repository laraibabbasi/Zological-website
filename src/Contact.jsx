import React,{useState} from 'react';

const Contact = ()=>{
    const [input,setInput]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',
    });
    const InputEvent=(e)=>{
        const{name,value}=e.target;
        setInput((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${input.fullname}. My mobile no is ${input.phone}. My email is ${input.email}. My message is ${input.message}`);
        setInput({
            fullname:'',
            phone:'',
            email:'',
            message:'',
        });

    };
    return(
        <>
        <div className="my-3">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Full Name</label>
                        <input
                         type="text"
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name="fullname"
                        value={input.fullname}
                        onChange={InputEvent} 
                        placeholder="Enter Your Name"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Phone</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name="phone"
                        value={input.phone} 
                        onChange={InputEvent}
                        onChange={InputEvent}
                        placeholder="Mobile No"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name="email"
                        value={input.email}
                        onChange={InputEvent} 
                        placeholder="name@example.com"/>
                    </div>
                    
                    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        name="message"
                        value={input.message}
                        onChange={InputEvent}
                       ></textarea>
                    </div>
                   
                    <div class="col-12">
                     <button type="submit" class="btn btn-outline-primary mt-2">Submit Form
                    </button>
                    </div>

                </form>
                </div>

            </div>

        </div>
        </>
    )
}

export default Contact;