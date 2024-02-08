import React, { Component } from 'react'; 
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json(); 
    })
    .then((result)=>{
        this.setState({data:result});               
        console.log(this.state.data);              
    })
}


  render() {
    return (
      <div>
        <table responsive="md" id="Lst">
        <thead>
          <tr >
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {this.state.data && this.state.data.length > 0 ? (
                    this.state.data.map(user => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.website}</td>
                          <td>{user.phone}</td>
                          <td><button id="DelBtn"><DeleteIcon/></button></td>
                          <td><button id="UpdBtn"><EditIcon/></button></td>
                        </tr>
                      ))
            ) : (
                        <tr>
                            <td colSpan="2"><center>No user available</center></td>
                        </tr>
             )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default List;
