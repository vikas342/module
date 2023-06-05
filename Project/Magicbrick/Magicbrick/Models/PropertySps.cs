using Microsoft.EntityFrameworkCore;

namespace Magicbrick.Models
{

    [Keyless]
    public class PropertySps
    {
        public int U_ID { get; set; }       
        public string Owner_Name { get; set; }
        public string o_email { get; set; }
        public string o_contact { get; set; }
        public string Building_name { get; set; }
        public string Area { get; set; }
        public string Pincode { get; set; }
        public string state { get; set; }
        public string city { get; set; }

        public string PostedBy { get; set; }
        public string PropertyFor { get; set; }
        public string PropertyType { get; set; }
        public string Status { get; set; }
        public int Price { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<AmenityModel> prop_amenities { get; set; }
        public List<ImageModel> imageUrl { get; set; }
    }

    [Keyless]

    public class AmenityModel
    {
        public string amenity { get; set; }
    }


    [Keyless]

    public class ImageModel
    {
        public int Img_Id { get; set; }
        public string Image_url { get; set; }
    }



}
