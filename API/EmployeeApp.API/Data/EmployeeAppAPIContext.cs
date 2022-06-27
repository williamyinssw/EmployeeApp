using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmployeeApp.API.Model;

namespace EmployeeApp.API.Data
{
    public class EmployeeAppAPIContext : DbContext
    {
        public EmployeeAppAPIContext (DbContextOptions<EmployeeAppAPIContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeApp.API.Model.Employee>? Employee { get; set; }
    }
}
