import { Provider } from "react-redux";
import store from "./store";
import EmployeeForm from './components/EmployeeForm';
import { addEmployee } from './services/employeeService';

const handleSubmit = (values) => {
  // event.preventDefault();
  
  debugger;
  console.log(values);
  addEmployee(
    values,
    succeed,
    failed,
  );
}

const succeed = (res) => {
  console.log(res);
  console.log("succeed");
}

const failed = (res) => {
  console.log(res);
  console.log("failed");
}

function EmployeeAddOrEdit() {
  return ( 
  	<div>
          <Provider store={store}>
              <EmployeeForm />
            </Provider>
    </div>    
  );
 };

 export default EmployeeAddOrEdit;