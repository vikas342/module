using System;
using System.Collections.Generic;

namespace Db_first.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            PatientDocId2Navigations = new HashSet<Patient>();
            PatientDocId3Navigations = new HashSet<Patient>();
            PatientDocs = new HashSet<Patient>();
        }

        public int? DepId { get; set; }
        public int DocId { get; set; }
        public string DocName { get; set; } = null!;

        public virtual Department? Dep { get; set; }
        public virtual ICollection<Patient> PatientDocId2Navigations { get; set; }
        public virtual ICollection<Patient> PatientDocId3Navigations { get; set; }
        public virtual ICollection<Patient> PatientDocs { get; set; }
    }
}
