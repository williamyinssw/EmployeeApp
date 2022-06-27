using EmployeeApp.API.Data;
using EmployeeApp.API.Interfaces;
using EmployeeApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.API.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeAppAPIContext _context;

        public EmployeeRepository(EmployeeAppAPIContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            if (_context.Employee == null)
            {
                throw new Exception("Employee table not found!");
            }
            return await _context.Employee.ToListAsync();
        }

        public async Task<Employee?> GetEmployee(int id)
        {
            if (_context.Employee == null)
            {
                throw new Exception("Employee table not found!");
            }
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return null;
            }

            return employee;
        }

        public async Task<bool> PutEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return false;
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

            return true;
        }

        public async Task<Employee> PostEmployee(Employee employee)
        {
            if (_context.Employee == null)
            {
                throw new Exception("Employee table not found!");
            }
           
            _context.Employee.Add(employee);           

            var result = await _context.SaveChangesAsync();

            if (result > 0)
            { 
                return employee;
            }
            else
            {
                throw new Exception("Update employee failed!");
            }
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            if (_context.Employee == null)
            {
                throw new Exception("Employee table not found!");
            }
            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                throw new Exception($"Employee with id:{id} not found!");
            }

            _context.Employee.Remove(employee);
            var result = await _context.SaveChangesAsync();

            return result > 0 ? true : false;  
        }

        private bool EmployeeExists(int id)
        {
            return (_context.Employee?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
