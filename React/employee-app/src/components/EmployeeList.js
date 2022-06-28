import React, { useEffect } from 'react'
import { getEmployeeList, removeEmployee } from '../services/employeeService';

const EmployeeList = () => {
  
  const [list, setList] = React.useState([]);

  const handleGetEmployeeList = (values) => {
    getEmployeeList(
      succeed,
      failed,
    );
  }

  const succeed = (res) => {
    console.log(res);
    setList(res.data);
    console.log(list);
    console.log("succeed");
  }

  const failed = (res) => {
    console.log(res);
    console.log("failed");
  }

  const handleRemoveClick = id => {
    debugger;
    console.log(id);
    console.log(list);

    removeEmployee(
      id,
      (res)=>{
        console.log("remove succeed");
        console.log(res);
      },
      (res)=>{
          console.log("remove failed");
          console.log(res);
        },
    );
    
    // TODO: move below code to succeed call back method, need global state
    setList(list.filter(item => item.id !== id));     

  };

  useEffect(() => {
    handleGetEmployeeList();  
  }, []);

  return (
    <div className="table">
      <thead>
        <tr>
          <th><abbr title="Id">Id</abbr></th>
          <th><abbr title="Full Name">Full Name</abbr></th>
          <th><abbr title="Email">Email</abbr></th>
          <th><abbr title="Click to Edit">Edit</abbr></th>
          <th><abbr title="Click to Delete">Delete</abbr></th>          
        </tr>
      </thead>
      <tbody>
        {list.map(item => (          
            <tr>
                <td>{item.id}</td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>Edit</td>
                <td>
                <button type="button" onClick={() => handleRemoveClick(item.id)}>
                  Remove
                </button>
                </td>
            </tr>
        ))}      
      </tbody>
     
    </div>
  )
}

export default EmployeeList