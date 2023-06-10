using System;
using System.Collections.Generic;

namespace FInal.Models
{
    public partial class User
    {
        public int Uid { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Phoneno { get; set; }
        public string? Passwordhash { get; set; }
        public string? Passwordsalt { get; set; }
        public int? Role { get; set; }

        public virtual Role? RoleNavigation { get; set; }
    }
}
