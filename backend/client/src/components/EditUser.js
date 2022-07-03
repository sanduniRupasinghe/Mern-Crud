import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component{

  constructor (props){
    super(props);
    this.state={
      name:"",
      address:"",
      contactNo:"",
      gender:"",
      dob:""
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
    const id = this.props.match.params.id;
    const {name,address,contactNo,gender,dob} = this.state;

    const data = {
      name:name,
      address:address,
      contactNo:contactNo,
      gender:gender,
      dob:dob,
    }

    console.log(data)

     axios.put(`http://localhost:8000/users/update/${id}`,data).then((res) =>{
       if(res.data.success){
         alert("User Updated Successfully")
         
         this.setState(
           {
            name:"",
            address:"",
            contactNo:"",
            gender:"",
            dob:""
           }
         )
       }
     })
  }


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/users/${id}`).then ((res) =>{
      if(res.data.success){

        this.setState({

          name:res.data.user.name,
          address:res.data.user.address,
          contactNo:res.data.user.contactNo,
          gender:res.data.user.gender,
          dob: res.data.user.dob,
      });
      console.log(this.state.user);
    }

  });
}


render(){
  return(
    <div className= "container">
      
      <br></br>
      
      <form className="row g-3">

      <center><h3>Update Users</h3></center>

      <div className="col-12">
          <label for="inputname"><b>User Name</b></label>
            <input type="text" className="form-control" id="name"  placeholder="Enter Donor name"
             value={this.state.name} onChange={this.handleInputChange}/>
        </div>


        <div className="col-12">
        <label for="inputAddress"><b>Address</b></label>
            <input type="text" className="form-control" id="address"  placeholder="Enter Address"
            value={this.state.address} onChange={this.handleInputChange}/>
        </div>


        <div className="col-12">
        <label for="inputcontac"><b>Contact No</b> </label>
            <input type="text" className="form-control" id="contactNo" placeholder="Enter Phone No"
            value={this.state.contactNo} onChange={this.handleInputChange}/>
        </div>


        <div className="col-12">
          <label for="gender"><b>Gender</b></label>
              <select id= "gender" className="form-control" value={this.state.gender} onChange={this.handleInputChange}>
                  <option selected>Choose...</option>
                  <option>M</option>
                  <option>F</option>
              </select>
        </div>


        <div className="col-12">
            <label for="inputdob"><b>Date Of Birth</b></label>
              <input type="Date" className="form-control" id="dob"  placeholder="Enter Birthday"
              value={this.state.dob} onChange={this.handleInputChange}/>
          </div>


        <center> <button className="btn btn-success" type="submit" style= {{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
                &nbsp; Update
        </button></center>

      </form>
    </div>
  )
  }
}
