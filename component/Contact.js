import React from "react";
import axios from "axios";
import * as JQuery from "jquery";
const $ = JQuery.default;

export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 async handleSubmit(e){
e.preventDefault()
const name = this.state.name;
const email = this.state.email;
const message = this.state.message;

if(!name) alert('Name could not be null!')
else if(!email) alert ('Email could not be null!')
else if (!message) alert ('Say something!')
else{
    
const result = await axios.post('/api/messages',{name,email,message})
 console.log(result)

if(result.data) {alert('Thanks to your message, I will get back to you very soon!')
this.setState({
   name:'',
   email:'',
   message:''
  });
}
else alert('Please use a valid Email')
}



  }

  render() {
    return (
        <div data-aos = 'fade-up'>
          <br/>  <br/>  <br/>  <br/>  <br/>     <br/>  
     <h1 className = 'ProjectsTitle'>Contact</h1>
        <form onSubmit={this.handleSubmit}>




             <div id='contactMe' class="ContactContainer">
         
             <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="name" aria-label="First name" name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required="required"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="email" aria-label="Last name" name="email"
            value={this.state.email}
            onChange={this.handleChange}/>
  </div>
</div>

<br/>
<div class="mb-3">
 
  <textarea class="form-control"placeholder="Please leave a message, I will get back to you as soon as possible..." id="exampleFormControlTextarea1" rows="3"   type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}></textarea>
</div>
          
<button type="submit" className="btn btn-dark">Submit</button>
<br/><br/><br/><br/>
          </div>

        </form>

        <br/><br/><br/><br/>
      </div>
    );
  }
}
