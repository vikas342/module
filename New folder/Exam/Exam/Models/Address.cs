using System;
using System.Collections.Generic;

namespace Exam.Models
{
    public partial class Address
    {
        public int Aid { get; set; }
        public int? Uid { get; set; }
        public string? Flatno { get; set; }
        public string? Area { get; set; }
        public string? State { get; set; }
        public string? City { get; set; }
        public string? Pincode { get; set; }

        public virtual User? UidNavigation { get; set; }
    }
}
