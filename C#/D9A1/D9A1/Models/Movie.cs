using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace D9A1.Models
{

    public class Details
    {
        public string DirectorName { get; set; }
        public List<string> ActorsNames { get; set; }
        public string VideoLink { get; set; }
    }

    public class MoviesData
    {
        public int MovieID { get; set; }
        public string MovieName { get; set; }
        public Details Details { get; set; }
    }
}
