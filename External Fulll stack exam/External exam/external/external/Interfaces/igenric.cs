namespace external.Interfaces
{
    public interface igenric<T>
    {
        List<T> getall();

        T getbyId(int id);  

        List<T> Insert(T item);

        List<T> delete(int id);

    }
}
