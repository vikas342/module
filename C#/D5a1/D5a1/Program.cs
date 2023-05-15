using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace D5a1
{


    class react
    {
        public int height { get; set; }
        public int width { get; set; }

        //react(int height, int width)
        //{
        //    this.height = height;
        //    this.width = width;
        //}

        public float area(int height, int width)
        {
            return height * width;
        }
        internal class Program
        {
            static void Main(string[] args)
            {
                react obj = new react();

                Func<int,int,float> func = obj.area;

                float ar = func(15,50);
                Console.WriteLine(ar);

            }
        }
    }
}