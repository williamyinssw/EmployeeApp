using System.ComponentModel.DataAnnotations;

namespace EmployeeApp.API.Model
{
    public class Error
    {
        public Error(string code, string title, string detail)
        {
            this.Code = code;
            this.Title = title;
            this.Detail = detail;
        }

        [Required]
        public string Code { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Detail { get; set; }
    }
}