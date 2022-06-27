using EmployeeApp.API.Model;

namespace EmployeeApp.API.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetEmployees();

        Task<Employee?> GetEmployee(int id);

        Task<bool> PutEmployee(int id, Employee employee);

        Task<Employee> PostEmployee(Employee employee);

        Task<bool> DeleteEmployee(int id);
    }
}
