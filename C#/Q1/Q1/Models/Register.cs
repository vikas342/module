﻿using System.ComponentModel.DataAnnotations;

namespace Q1.Models
{
    public class Register
    {
        [Required]
        public string Name { get; set; }


        [Required]
        public string Email { get; set; }



        [Required]
        public string Password { get; set; }


        [Required]
        public string Role { get; set; }


    }
}
