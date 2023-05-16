using System;
using System.IO;
namespace Filehandling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string path = @"D:\test.txt";

            //if(File.Exists(path))
            //{
            //    Console.WriteLine("Exist");

            //    string text = "\nhello";
            //    File.AppendAllText(path, text);

            //    string lines=File.ReadAllText(path);
            //    Console.WriteLine(lines);


            //}
            //else
            //{
            //    Console.WriteLine("Not Exist");
            //}.


            FileStream fs = new FileStream(path,FileMode.OpenOrCreate);


            StreamWriter writer = new StreamWriter(fs);

            StreamReader reader = new StreamReader(fs);

           // string line=reader.ReadLine();

            string line="";
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }

            //writer.WriteLine("vikas sonwane");

            Console.WriteLine(line);
            writer.Close();
            fs.Close();

        }
    }
}