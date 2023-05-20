
using D9A1.Models;
using System;
using System.IO;
using System.Reflection;
using System.Text.Json;


namespace D9A1

{
    internal class Program
    {
        static void Main(string[] args)
        {
            FileStream fs = new FileStream(@"C:\\Users\\vikas.sonwane\\Desktop\\module\\C#\\D9A1\\D9A1\\movie.json",FileMode.Open,FileAccess.Read);


            StreamReader sr = new StreamReader(fs);
            string line= sr.ReadToEnd();
            Console.WriteLine(line);

            var data = JsonSerializer.Deserialize<MoviesData[]>(line);

            var list= data.ToList();
           //  Console.WriteLine(data);

            foreach (var item in data)
            {
                Console.WriteLine(item.Details.DirectorName );
            }


            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine();

            Console.Write("Enter directer's name:");
            string inp1 = Convert.ToString(Console.ReadLine());

            var found1 = list.FindAll(x=> x.Details.DirectorName== inp1);
            Console.WriteLine();
            Console.WriteLine("Directors Movies");
            Console.WriteLine();

            foreach (var item in found1)
            {
                Console.WriteLine(item.MovieName);

            }



            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();


            Console.WriteLine("Printing Movies in which Director is Working as Actor:");
            Console.WriteLine();
            Console.WriteLine();

            var found2 = list.FindAll(x => x.Details.DirectorName == x.Details.ActorsNames[0]);
            Console.WriteLine();
            Console.WriteLine();

            foreach (var item in found2)
            {
                Console.WriteLine(item.MovieName);

            }


            Console.WriteLine( );
            Console.WriteLine();


            DirectoryInfo directoryInfo = new DirectoryInfo(@"C:\Users\vikas.sonwane\Desktop\module\C#\D9A1\D9A1\D9A1.csproj");
           DirectoryInfo[] array= directoryInfo.GetDirectories();
            foreach (var item in array)
            {
                Console.WriteLine(item.FullName);
                DirectoryInfo directoryInfo1 = new DirectoryInfo( item.FullName);
                DirectoryInfo[] array1= directoryInfo1.GetDirectories();
                foreach (var item1 in array1)
                {
                    Console.WriteLine("___" + item1.Name);
                   FileInfo[] fileInfos= item1.GetFiles();
                    foreach (var files in fileInfos)
                    {
                        Console.WriteLine($"{files.Name} -- {files.Extension}");
                    }
                }

            }




        }
    }
}