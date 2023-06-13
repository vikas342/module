using System;
using System.Collections.Generic;

namespace external.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Passwordhash { get; set; }
        public string? Passwordsalt { get; set; }
        public string? Email { get; set; }
        public string? PhoneNo { get; set; }
        public int? Role { get; set; }

        public virtual Role? RoleNavigation { get; set; }
    }
}
