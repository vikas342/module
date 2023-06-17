using Microsoft.EntityFrameworkCore;

namespace AWSIMAGE.DTOs
{
    [Keyless]
    public class ImageDto
    {
        public string? url { get; set; }

    }
}
