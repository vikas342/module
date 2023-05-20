using System;
using System.Collections.Generic;

namespace Db_first.Models
{
    public partial class Patient
    {
        public Patient()
        {
            Drugs = new HashSet<Drug>();
        }

        public int PatientId { get; set; }
        public string? PatientName { get; set; }
        public int? DocId { get; set; }
        public int? DocId2 { get; set; }
        public int? DocId3 { get; set; }
        public int? AssistantId { get; set; }

        public virtual Assistant? Assistant { get; set; }
        public virtual Doctor? Doc { get; set; }
        public virtual Doctor? DocId2Navigation { get; set; }
        public virtual Doctor? DocId3Navigation { get; set; }
        public virtual ICollection<Drug> Drugs { get; set; }
    }
}
