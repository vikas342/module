namespace Magicbrick.Interfaces
{
    public interface IGenric<T>
    {

        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(int id);
        Task Insert(T item);
        Task Update(T item, int id);
        Task Delete(T item);
    }
}
