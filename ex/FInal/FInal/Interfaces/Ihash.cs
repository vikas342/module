namespace FInal.Interfaces
{
    public interface Ihash
    {

        public string Hash(string pwd, string salt);

        public bool verify(string pwd, string hashedPwd, string salt);
    }
}
