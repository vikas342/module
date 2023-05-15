using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace D4p1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string,int> dict = new Dictionary<string,int>();

            dict.Add("Apple", 50000);
            dict.Add("Samsung", 35000);
            dict.Add("oneplus", 29999);


            foreach(var x in dict)
            {
                Console.WriteLine(x.Key);
            }

            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("Enter productName: ");

            string product=Convert.ToString(Console.ReadLine());
            Console.WriteLine();
            Console.WriteLine(product+"\t"+dict[product]);


        }
    }
}
