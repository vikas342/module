﻿using System.ComponentModel.DataAnnotations;

namespace MagicBricks.DTO
{
    public class Login
    {


        [Required]
        public string Email { get; set; }


        [Required]

        public string Password { get; set; }
    }
}
