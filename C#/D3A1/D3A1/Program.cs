using System;

public class Employees
{
    public int id { get; set; }
    public string name { get; set; }

    public virtual int basicSalary()
    {
        return 8000;
    }
    public int leaves { get; set; }

}
public class Parttimeemp : Employees
{
    int hours;

    public override int basicSalary()
    {
        return 5000;
    }

    int hourlyslary;
    public int total { get { return basicSalary() + hours * hourlyslary - (hourlyslary * leaves ); } }

    public Parttimeemp(int hours, int hourlyslary, string name, int id, int leave)
    {
        this.name = name;
        this.id = id;
        this.hours = hours;
        this.hourlyslary = hourlyslary;
        this.leaves = leave;
    }
}
public class Fulltimeemp : Employees
{

    public int salary { get; set; }

    int insurence { get; set; }
    float totalallownce()
    {
        return hra + insurence;
    }
    public float hra { get { return (float)(salary + basicSalary()) * 0.20f; } }
    public int total { get { return salary + basicSalary() - (int)totalallownce() - leaves * salary / 30; } }

    public Fulltimeemp(int id,string name, int salary,int leave ,int insurence)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.leaves = leave;
        this.insurence = insurence;
    }
}
public class Implement
{
    public static void Main()
    {
        Parttimeemp obj = new Parttimeemp(2, 150, "demo", 2771, 2);
        Fulltimeemp obj2 = new Fulltimeemp(111,"vikas",25000,2,3500);
       
        Console.WriteLine("ID:" + obj.id + "\tName: " + obj.name + "\tSalary:" + obj.total + "\tLeaves: " + obj.leaves);
   
        Console.WriteLine("ID:" + obj2.id + "\tName: " + obj2.name + "\tSalary:" + obj2.total + "\tLeaves: " + obj2.leaves + "\tAllowance: " + obj2.hra);
    }

}