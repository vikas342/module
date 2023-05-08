class StudentData { string? name; string? address; double hindi; double english; double maths; double total; string? grade; 
    public StudentData(string? name, string? address, double hindi, double english, double maths, double total, string? grade) 
    { 
        this.name = name; 
        this.address = address; 
        this.hindi = hindi; 
        this.english = english; 
        this.maths = maths; 
        this.total = total; 
        this.grade = grade; 
    } 
    public void display() 
    { 
        Console.WriteLine("{0}\t {1}\t {2}\t {3}\t {4}\t {5}\t {6}", this.name, this.address, this.hindi, this.english, this.maths, this.total, this.grade); 
    } 
}
namespace Studentdetails 
{ 
    internal class Program 
    { 
        static void Main(string[] args) { 
            string? name; string? address; 
            double hindi; double english; 
            double maths; double total; 
            string? grade; 
            StudentData[] student = new StudentData[2]; 
            for (int i = 0; i < student.Length; i++) 
            { 
                Console.WriteLine("Enter Student{0} Name : ", i);
                name = Console.ReadLine();
                Console.WriteLine("Enter Student{0} Address : ", i);
                address = Console.ReadLine(); 
                Console.WriteLine("Enter Student{0} Hindi marks : ", i); 
                hindi = Convert.ToInt32(Console.ReadLine()); 
                Console.WriteLine("Enter Student{0} English marks : ", i); 
                english = Convert.ToInt32(Console.ReadLine()); 
                Console.WriteLine("Enter Student{0} Maths marks : ", i); 
                maths = Convert.ToInt32(Console.ReadLine()); 
                total = hindi + english + maths;
                if (total / 3 >= 70) 
                { grade = "A"; } 
                else if (total >= 60) 
                { grade = "B"; } 
                else if (total >= 50) 
                { grade = "C"; } 
                else 
                { grade = "D"; } student[i] = new StudentData(name, address, hindi, english, maths, total, grade); }
            Console.WriteLine("Name\tAddress\tHindi\tEnglish\tMaths\tTotal\tGrade"); Console.WriteLine("--------------------------------------------------------------"); 
            for (int j = 0; j < 2; j++) 
            { 
                student[j].display(); 
            } 
        } 
    } 
}