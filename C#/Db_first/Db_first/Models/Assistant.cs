using System;
using System.Collections.Generic;

namespace Db_first.Models
{
    public partial class Assistant
    {
        public Assistant()
        {
            Patients = new HashSet<Patient>();
        }

        public int AssistantId { get; set; }
        public string AssistantName { get; set; } = null!;
        public int? DepId { get; set; }

        public virtual Department? Dep { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
