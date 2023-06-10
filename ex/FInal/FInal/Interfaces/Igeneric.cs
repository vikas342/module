namespace FInal.Interfaces
{
    public interface Igeneric<T>
    {

        List<T> getall();

        T getbyId(int id);

        List<T> insert(T item);

        List<T> delete(int id);
    }
}
