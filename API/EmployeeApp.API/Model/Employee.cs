namespace EmployeeApp.API.Model
{
    public class Employee
    {
        public int Id { get; set; }

        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }

        public string? Email { get; set; }
        public string? Mobile { get; set; }
        public string? ResidentialAddress { get; set; }


        public EmpoyeeType EmpoyeeType { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime FinishDate { get; set; }

        public bool Ongoing { get; set; }

        public TimeBasis TimeBasis { get; set; }

    }

    public enum EmpoyeeType
    {
        Permanant,
        Contract,
    }

    public enum TimeBasis
    {
        FullTime,
        PartTime,
    }
}
