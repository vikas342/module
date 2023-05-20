using System;
using System.Collections.Generic;

namespace Db_first.Models
{
    public partial class Drug
    {
        public int DrugId { get; set; }
        public string? DrugType { get; set; }
        public int? PatientId { get; set; }

        public virtual Patient? Patient { get; set; }
    }
}
