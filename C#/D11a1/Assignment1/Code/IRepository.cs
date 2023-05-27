namespace Assignment1.Code
{
    public interface IRepository <Type>
    {
        Type Add(Type Enity);
        Type Update(int id,Type Enity);
        Type Delete(Type Entity);   
        IEnumerable<Type> Index();

    }
}
