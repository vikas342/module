﻿namespace Exam.Dtos
{
    public class Register
    {
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }

        public string Photo { get; set; }
        public string Email { get; set; }

        public string Password { get; set; }

        public DateTime? Createddate { get; set; }=DateTime.Now;

        public int Role { get; set; } = 2; 





    }
}
