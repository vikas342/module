﻿using System.ComponentModel.DataAnnotations;

namespace Q1.Models
{
    public class Login
    {


        [Required]
        public string Email { get; set; }


        [Required]

        public string Password { get; set; }
    }
}
