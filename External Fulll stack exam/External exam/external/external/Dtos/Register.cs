using Microsoft.EntityFrameworkCore;

namespace external.Dtos
{
    [Keyless]
    public class Register
    {
        public string ?uname { get; set; }
        public string ? phoneno { get; set; }

        public string Email { get; set; }

        public string ? Password { get; set; }


        public int Role { get; set; } = 2; 





    }
}
