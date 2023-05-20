using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace D9A1.Models
{

    public class Movie
    {
        public int MovieID { get; set; }
        public string MovieName { get; set; }
    }

    public class InfoData
    {
        public List<string> Directors { get; set; }
        public List<Movie> Movies { get; set; }
        public List<string> Actors { get; set; }
    }


}
