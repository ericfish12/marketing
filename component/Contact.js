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
          <br/>  <br/>  <br/>  <br/>  <br/>     <br/>  <br/>  <br/>  <br/>  <br/>
     <h1 className = 'ProjectsTitle'>Contact</h1>
        <form onSubmit={this.handleSubmit}>
             <div id='contactMe' class="ContactContainer">
         
        <div class = 'ContactLeft'>
          <label htmlFor="Name">Name:</label>
          <input
          id='inputName'
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required="required"
          />

          <label htmlFor="email">Email:</label>
          <input
          id='inputEmail'
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br/>
            <button type="submit">Submit</button>
</div>
<div class = 'ContactRight'>
          <label htmlFor="Message">Message:</label>
          <textarea
          id= 'inputMessage'
        
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
</div>
        
          </div>
        </form>
      </div>
    );
  }
}
