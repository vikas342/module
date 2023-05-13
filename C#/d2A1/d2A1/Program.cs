
public class person
{

    private readonly string Fname;
    private readonly string Lname;
    private readonly string email;
    private readonly string DOB;


    public person(string fname, string lname, string email, string dOB)
    {
        Fname = fname;
        Lname = lname;
        email = email;
        DOB = dOB;
    }


   public void  printdata()

    {

        Console.WriteLine(Fname + " "+ Lname);

        Console.WriteLine(email);
        Console.WriteLine(DOB);

    }
}


class xyz
{
  public static void Main(string[] args)
    {

        person[] x=new person[1];
        x[0]= new person("vikas", "sonwane", "v@gmail.com", "03-04-2002");
        x[0].printdata();
        
    }
}


