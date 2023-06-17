using Amazon;
using Amazon.S3;
using Amazon.S3.Transfer;
using AWSIMAGE.DTOs;
using AWSIMAGE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AWSIMAGE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly AWSIMAGEContext _context;

        private const string BucketName = "myimages.vikas";
        public ValuesController(AWSIMAGEContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> upload(ImageDto imageDto)
        {

            if(imageDto == null)
            {
                return BadRequest();
            }
            var image=new ImageTable { ImageUrl = imageDto.url };
            await _context.AddAsync(image);
            await _context.SaveChangesAsync();
            return Ok("success"+imageDto.url);
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
                url = url
            };

  
            return Ok(resp);

        }
    }
}
