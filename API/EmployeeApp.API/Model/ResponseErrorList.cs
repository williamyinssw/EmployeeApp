using System.ComponentModel.DataAnnotations;

namespace EmployeeApp.API.Model
{
    internal class ResponseErrorList
    {
        public ResponseErrorList(string errorCode, string errorTitle, string errorDetail)
        {
            var error = new Error(errorCode, errorTitle, errorDetail);
            this.Errors = new List<Error>() { error };
        }

        [Required]
        public List<Error> Errors { get; set; }
    }
}