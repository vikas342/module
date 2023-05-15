using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Extention
{
    public static  class isGreater
    {

        public static bool isgreater( this int i,int value)
        {
            return i > value;

        }

        public static int add(this int i,int v1,int v2)
        {
            return i=v1+v2;
        }


        public static int squares( this int i )
        {
            return i * i;
        }
    }
    

}
