using Amazon.S3.Transfer;
using Amazon.S3;
using Magicbrick.DTOs;
using Magicbrick.Interfaces;
using Magicbrick.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;

using System.IdentityModel.Tokens.Jwt;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Xml.Linq;
using Amazon;

namespace Magicbrick.Controllers
{


    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : GenricController<Property>
    {

        private readonly MagicBricksDbContext _context;
        private const string BucketName = "myimages.vikas";

        public PropertyController(IGenric<Property> igenric, MagicBricksDbContext context) : base(igenric)
        {
            _context = context;
        }


      


        //public PropertyController(MagicBricks_context context, IConfiguration config, IHash hash)
        //{
        //    _context = context;
        //}



        ///get users prop_listings

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("GetuserPropertylisting")]
        public async Task<IActionResult> GetuserPropertylisting()
        {

            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(jwt);
                var userid = Convert.ToInt64(jwtToken.Claims.First().Value);

                var data = _context.PropertySps.FromSqlRaw($"Exec UserListing @userid={userid}");

                return Ok(data);


            }
            catch (Exception)
            {

                return BadRequest();
            }

        }



        //get othres_proplistings


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("GetotheruserPropertylisting")]
        public async Task<IActionResult> GetotheruserPropertylisting()
        {

            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(jwt);
                var userid = Convert.ToInt64(jwtToken.Claims.First().Value);

                var data = _context.PropertySps.FromSqlRaw($"Exec OtherUserListing @userid={userid}");
                return Ok(data);


            }
            catch (Exception)
            {

                return BadRequest();
            }

        }



        //get allusers proplistings


        [HttpGet("all_properties")]

        public async Task<IActionResult> getallprops()
        {
            var data =  _context.PropertySps.FromSqlRaw($"Exec AllListing");


            return Ok(data);




        }


        //get prop by id


        [HttpGet("getpropbyid")]

        public async Task<IActionResult> getpropbyid(int id)
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec  Propby_id @pid={id}");


            return Ok(data);



        }



        //get prop by city


        [HttpGet("getpropbycities")]

        public async Task<IActionResult> getpropbycities()
        {
            var data = (
                from ot in _context.Objecttypes join o in _context.Objects on ot.Id equals o.ObjTypeId where ot.ParentId == 4 select new
                {
                    id=o.Id,
                    city=o.Name
                }
                
                ).ToList();


            return Ok(data);



        }




        //get prop by states


        [HttpGet("getpropbystate")]

        public async Task<IActionResult> getpropbystate()
        {
            var data = (
                from ot in _context.Objecttypes

                where ot.ParentId == 4
                select new
                {
                    id=ot.Id,
                    state = ot.Name
                }

                ).ToList();


            return Ok(data);



        }






        //get proptype



        [HttpGet("getproptype")]

        public async Task<IActionResult> getproptype()
        {
            var data = (
                from ot in _context.Objecttypes
                join o in _context.Objects on ot.Id equals o.ObjTypeId
                where ot.Id == 2
                select new
                {
                    id=o.Id,
                    type = o.Name
                }

                ).ToList();


            return Ok(data);



        }




        //   on click on buy/rent -> property section    on navbar for proptype_section



        [HttpGet("getprop_CTF")]

        public async Task<IActionResult> getprop_CTF(string city, string proptype, string propfor)
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec allPropOn_CTF @city={city},@proptype={proptype},@propfor={propfor}");




            return Ok(data);

        }





        //   on click on buy/rent ->budget section    on navbar for budget



        [HttpGet("getpropbudget_CFMinMax")]

        public async Task<IActionResult> getpropbudget_CFMinMax(string city, string propfor, int min,int max)
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec allpropbudget_CFMinMax @city={city},@propfor={propfor}, @low={min},@high={max}");




            return Ok(data);

        }






        //   on click on buy/rent ->serch box    on home component



        [HttpGet("allpropserch_CTFMinMax")]

        public async Task<IActionResult> allpropserch_CTFMinMax(string city,string proptype, string propfor, int min, int max)
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec allpropserch_CTFMinMax @city={city},@proptype={proptype},@propfor={propfor}, @low={min},@high={max}");




            return Ok(data);

        }




        //get property accordeing to city

        //   on click link city to see all propertys in that city



        [HttpGet("allpropserch_city")]

        public async Task<IActionResult> allpropserch_city(string city )
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec Allcity_Prop @city={city} ");




            return Ok(data);

        }




        //prop for


        [HttpGet("Propfor")]

        public async Task<IActionResult> Propfor()
        {
            var data = from x in _context.Objects where x.ObjTypeId==3 select new {
                id=x.Id,
                propfor=x.Name };
             //   select  name as propfor  from Object where Obj_type_Id = 3






            return Ok(data);

        }



        //prop amenities


        [HttpGet("PropAmenities")]

        public async Task<IActionResult> PropAmenities()
        {
            var data = from x in _context.Objects
                       where x.ObjTypeId == 8
                       select new
                       {
                           id = x.Id,
                           amenity = x.Name
                       };



            return Ok(data);

        }





        //prop posted by


        [HttpGet("postedby")]

        public async Task<IActionResult> postedby()
        {
            var data = from x in _context.Objects where x.ObjTypeId == 10 select new { id=x.Id, postedby = x.Name };
            //   select  name as propfor  from Object where Obj_type_Id = 10





            return Ok(data);

        }



        //get property accordeing to rent


        [HttpGet("getpropertyon_rnt")]

        public async Task<IActionResult> getpropertyon_city()
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec Allsell_Prop ");





            return Ok(data);

        }




        //get property accordeing to sell


        [HttpGet("getpropertyon_sell")]

        public async Task<IActionResult> getpropertyon_sell()
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec Allrent_Prop ");





            return Ok(data);

        }



        //////////////////////////////////////
        //////////////////////////////////////
        //////////////////////////////////////
        //////////////////////////////////////
        //////////////////////////////////////

        //post propertyy//////



        [HttpPost("post_ownerdetails")]

        public async Task<IActionResult> post_ownerdetails(Ownerdetails_DTO ownerdetails_)
        {

            var data = new Owner();
            data.OwnerId = ownerdetails_.Owner_Id;
            data.CreatedDate = DateTime.Now;
            data.ModifiedDate = DateTime.Now;
            data.CreatedBy = ownerdetails_.Owner_Id;
            data.ModifedBy = ownerdetails_.Owner_Id;
            data.OwnerName = ownerdetails_.Owner_Name;
            data.ContactNo = ownerdetails_.contact_no;
            data.Email= ownerdetails_.Email;






           _context.AddAsync(data);
            _context.SaveChanges();

            return Ok(data.Id);

        }





        [HttpPost("post_Addressdetails")]

        public async Task<IActionResult> post_Addressdetails( int uid, Addressdetails_DTO addressdetails_)
         {

            var data = new Address();
             data.CreatedDate = DateTime.Now;
            data.ModifiedDate = DateTime.Now;
            data.CreatedBy = uid;
            data.ModifedBy = uid;
            data.Area = addressdetails_.Area;
            data.BuildingName = addressdetails_.Building_Name;
            data.State = addressdetails_.State;

          //  data.State = Convert.ToInt32(addressdetails_.State);

            data.City = addressdetails_.City;
            data.Pincode= addressdetails_.Pincode;
      






            _context.AddAsync(data);
            _context.SaveChanges();

            return Ok(data.AddId);

        }




        [HttpPost("post_Propdetails")]

        public async Task<IActionResult> post_Propdetails(int uid,Propertydetails_DTO propertydetails_)
        {

            var data = new Property();
            data.CreatedDate = DateTime.Now;
            data.ModifiedDate = DateTime.Now;
            data.CreatedBy = uid;
            data.ModifedBy = uid;

            data.Address = propertydetails_.Address;
            data.OwnerDetails = propertydetails_.Owner_details;
            data.PostedBy =propertydetails_.PostedBy;
            data.PropFor = propertydetails_.Prop_for;
            data.PropType = propertydetails_.Prop_Type;
            data.Status=propertydetails_.Status;
            data.Price = propertydetails_.Price;
            data.Prop_desc = propertydetails_.Prop_desc;

            _context.AddAsync(data);
            _context.SaveChanges();

            return Ok(data.PropId);

        }




        [HttpPost("post_PropAmenities")]

        public async Task<IActionResult> post_PropAmenities(int uid,int prop_id, Amenity_DTO amenity_)
        {

            foreach (var x in amenity_.amenities)
            {

                if (x.exist == true)
                {
                    var data = new PropAmenity();
                    data.CreatedDate = DateTime.Now;
                    data.ModifiedDate = DateTime.Now;
                    data.CreatedBy = uid;
                    data.ModifedBy = uid;
                    data.PropId = prop_id;
                    data.AmId = x.id;
                    _context.AddAsync(data);



                }

            }
            _context.SaveChanges();
            return Ok();

        }




        [HttpPost("post_PropImages")]

        public async Task<IActionResult> post_PropImages(int uid, int prop_id, PropertyImages_DTO images_)
        {

            foreach (var x in images_.images)
            {
                    var data = new PropertyImage();
                    data.CreatedDate = DateTime.Now;
                    data.ModifiedDate = DateTime.Now;
                    data.CreatedBy = uid;
                    data.ModifedBy = uid;
                    data.PropertyId = prop_id;
                    data.ImageUrl = x.imageurl;
                    _context.AddAsync(data);
            }
            _context.SaveChanges();
            return Ok();

        }




        [HttpPost("ImageUrl")]
        public async Task<IActionResult> geturl(IFormFile file)
        {
            if (file == null || file.Length <= 0)
            {
                return BadRequest("No file specified.");
            }
            var destKey = $"Images/{file.FileName.ToLower()}";



            using (var client = new AmazonS3Client(Amazon.RegionEndpoint.APSouth1))
            {
                using (var transferUtility = new TransferUtility(client))
                {
                    var transferUtilityRequest = new TransferUtilityUploadRequest
                    {
                        BucketName = BucketName,
                        Key = destKey,
                        InputStream = file.OpenReadStream(),
                        //CannedACL = S3CannedACL.PublicRead
                    };

                    await transferUtility.UploadAsync(transferUtilityRequest);
                }
            }
            var reg = RegionEndpoint.APSouth1;
            var url = $"https://{BucketName}.s3.{reg.SystemName}.amazonaws.com/{destKey}";
            var resp = new
            {
                imageurl = url
            };


            return Ok(resp);

        }
    }
}
