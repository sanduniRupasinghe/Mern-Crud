import React, {Component} from 'react';
import axios from 'axios';
import logo from './icon.png';

export default class AddUser extends Component{

  constructor (props){
    super(props);
    this.state={
      name:"",
      address:"",
      contactNo:"",
      gender:"",
      dob:"",
    }
  }


  handleInputChange = (e =>{
    const {id,value} =e.target;

    this.setState({
      ...this.state,
      [id]:value
    })
  })


  onSubmit = (e) =>{

    e.preventDefault();

    const {name,address,contactNo,gender,dob} = this.state;

    const data = {
      name:name,
      address:address,
      contactNo:contactNo,
      gender:gender,
      dob:dob,
    }

    console.log(data)

     axios.post("http://localhost:8000/user/save",data).then((res) =>{
       if(res.data.success){
         alert ("Users Details Added Successfully")
         this.setState(
           {
            name:"",
            address:"",
            contactNo:"",
            gender:"",
            dob:"",
           }
         )
       }
     })
  }


  render(){
    return(
      <div className= "container">
        
        <br></br>
        <form className="row g-3" class="row needs-validation" novalidate  onSubmit= {this.onSubmit}>

          <div className="row text">
            <div className="col-md-6 cols">
            <h3>Add New users</h3>

            <img src={logo} alt="" width="450" height="400" class="d-inline-block align-text-top"/>
            </div>


      <div className="col-md-6 cols">
        <br></br>
        
          <div className="mb-3">
            <label for="inputname"><b>User Name</b></label>
              <input type="text" className="form-control" id="name" required placeholder="Enter Donor name" 
               value={this.state.name} onChange={this.handleInputChange}/>
          </div>


          <div className="mb-3">
          <label for="inputAddress"><b>Address</b></label>
              <input type="text" className="form-control" id="address" required placeholder="Enter Address"
              value={this.state.address} onChange={this.handleInputChange}/>
          </div>


          <div className="mb-3">
          <label for="inputcontac"><b>Contact No</b></label>
              <input type="text" className="form-control" id="contactNo" required placeholder="07x-xxxxxxx"
              pattern="[0]{1}[7]{1}[0-9]{1}-[0-9]{7}"
              value={this.state.contactNo} onChange={this.handleInputChange}/>
          </div>


          <div className="mb-3">
          <label for="gender"><b>Gender</b></label>
              <select id= "gender" className="form-control" value={this.state.gender} onChange={this.handleInputChange}>
                  <option selected>Choose...</option>
                  <option>M</option>
                  <option>F</option>
              </select>
          </div>


          <div className="mb-3">
            <label for="inputdob"><b>Date Of Birth</b></label>
              <input type="Date" className="form-control" id="dob" required placeholder="Enter Birthday"
              value={this.state.dob} onChange={this.handleInputChange}/>
          </div>
  
          <center> <button className="btn btn-success" type="submit" style= {{marginTop:'15px'}} >
              <i onClick={this.onSubmit}>  </i>
                  &nbsp;Add
          </button></center>
          
          </div>
          </div>

        </form>
      </div>
    )
    }
}



