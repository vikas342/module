

using Microsoft.EntityFrameworkCore;

namespace Db_first.Models
{
    [Keyless]
    public class ReportSP
    {
       
        public int patient_id { get; set; }
        public string patient_name { get; set; }
        public string doc_name { get; set; }
        public string drug_type { get; set; }
        public string assistant_name { get; set; }
    }
}
