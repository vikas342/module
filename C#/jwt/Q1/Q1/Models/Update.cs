using System.ComponentModel.DataAnnotations;

namespace Q1.Models
{
    public class Update
    {


        [Required]
        public string Name { get; set; }


        [Required]
        public string Email { get; set; }


    }
}
