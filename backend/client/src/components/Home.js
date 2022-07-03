import React, {Component} from 'react';
import axios from 'axios';


export default class Home extends Component{
  constructor(props){
    super(props);
  
    this.state={
      users:[]
    };
  
    }
  
  
    componentDidMount(){
      this.retrievePosts();
    }
  
    retrievePosts(){
        axios.get("http://localhost:8000/users").then(res =>{
          if(res.data.success){
            this.setState({
              users:res.data.existingUser
          });
  
          console.log(this.state.users)
        }
  
    });
  }
  
  
  //delete the usre details
  
  onDelete = (id) =>{
      axios.delete(`http://localhost:8000/users/delete/${id}`).then((res)=>{
        alert("Delete Successfully");
        this.retrievePosts();
      })
      
    }


    //search function

filterData(user,searchKey){

  const result = user.filter((user) =>
  user.name.toLowerCase().includes(searchKey)
  
  )

  this.setState({users:result})
}

handleSearchArea =(e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("http://localhost:8000/users").then(res => {
    if(res.data.success){

      this.filterData(res.data.existingUser,searchKey)
  }
  });
}


  
  render(){
    return(
      <div className= "container">
                <div>
               <br></br>
               <div className="row">
               <div className="col-lg-8 mt-2 mb-2">

               <b><h4><p>All Users List</p></h4></b>

               </div>

                <div className= "col-lg-3 mt-2 mb-2">
                  <input className="form-control" type="search" name="searchQuery" placeholder="Search" onChange={this.handleSearchArea}>
                  </input> 
                </div>

                </div> <br></br>
        
                  <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Action</th>
  
                      </tr>
                    </thead>
                   
                    <tbody>
                      {this.state.users.map((users,index) =>(
                        <tr key={index}>
            
            <th scope="row">{index+1}</th>
                    <td>
                        <a href={` /users/${users._id}`} style={{textDecoration:'none'}}>
                        {users.name}
                        </a>
                        </td>
      
                          <td>{users.address}</td>
                          <td>{users.contactNo}</td>
                          <td>{users.gender}</td>
                          <td>{users.dob}</td>
                          <td>

                          <a className="btn btn-warning" href= {`/editUser/${users._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit                    
                      </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(users._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;delete
                    </a>

     
  
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
  
                  <button className="btn btn-success"><a href="/adduser" style= {{textDecoration:'none', color:'white'}}>Create New Users</a></button>
            &nbsp;
  
        
                  
                      
                </div> 
           </div> 
            )
          } 
}



