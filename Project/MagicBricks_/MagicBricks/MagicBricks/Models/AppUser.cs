using Microsoft.AspNetCore.Identity;

namespace MagicBricks.Models
{
    public class AppUser: IdentityUser
    {
        public string Name { get; set; }

    }
}
