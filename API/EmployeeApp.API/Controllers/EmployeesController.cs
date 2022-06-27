using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeApp.API.Data;
using EmployeeApp.API.Model;
using EmployeeApp.API.Interfaces;
using System.Net;

namespace EmployeeApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeesController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<IEnumerable<Employee>> GetEmployee()
        {
            return await _employeeRepository.GetEmployees();           
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _employeeRepository.GetEmployee(id);
            if (employee == null)
                return NotFound();

            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            var result = await _employeeRepository.PutEmployee(id, employee);

            if (result == true)
                return NoContent();
            else
                return BadRequest();
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            return await _employeeRepository.PostEmployee(employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var result = await _employeeRepository.DeleteEmployee(id);

            if (result == false)
            {
                return NotFound();
            }           

            return NoContent();
        }
    }
}
