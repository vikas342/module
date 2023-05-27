using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        // Specify your AWS access key and secret access key
        string accessKey = "AKIAZ4ZY5FPSLBCGSKXQ";
        string secretKey = "cqorIqoolIwer6lpnrAS2AUDHN556qI0aYNb4hQg";

        // Specify the bucket name and region
        string bucketName = "vikas-buket-5374";
        RegionEndpoint bucketRegion = RegionEndpoint.APSouth1; // Replace with your desired region

        // Create an S3 client
        using (var s3Client = new AmazonS3Client(accessKey, secretKey, bucketRegion))
        {
            // Create the request to create a bucket




            //creating a bucket  



            //var request = new PutBucketRequest
            //{
            //    BucketName = bucketName,
            //    BucketRegion = S3Region.APSouth1 // Replace with your desired region
            //};

            //// Create the bucket
            //var response = s3Client.PutBucketAsync(request);

            //// Check the response
            //if (response.Result.HttpStatusCode == System.Net.HttpStatusCode.OK)
            //{
            //    Console.WriteLine("Bucket created successfully!");
            //}
            //else
            //{
            //    Console.WriteLine("Bucket creation failed. Error message: " + response.Result.ResponseMetadata.RequestId);
            //}







            using (var transferUtility = new TransferUtility(s3Client))
            {




                //  uploding single file



                //string path = "C:/Users/vikas.sonwane/Downloads/eve.jpg";
                //try
                //{
                //    Upload the file
                //    transferUtility.UploadAsync(path, bucketName).Wait();
                //    Console.WriteLine("File uploaded successfully!");
                //}
                //catch (Exception ex)
                //{
                //    Console.WriteLine("Error uploading file: " + ex.Message);
                //}



                string path = "C:/Users/vikas.sonwane/Desktop/module/Bootstrap/looplab/src/index.html";
                try
                {

                  //  Upload the file


                    transferUtility.UploadAsync(path, bucketName).Wait();
                    Console.WriteLine("File uploaded successfully!");
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error uploading file: " + ex.Message);
                }






                //upload multiple files


                //List<string> path = new List<string>() {
                //   "C:/Users/vikas.sonwane/Desktop/module/AWS/imgs/alice.jpg",
                //   "C:/Users/vikas.sonwane/Desktop/module/AWS/imgs/bob.jpg",
                //   "C:/Users/vikas.sonwane/Desktop/module/AWS/imgs/charlie.jpg",
                //   "C:/Users/vikas.sonwane/Desktop/module/AWS/imgs/eve.jpg",


                //};

                //foreach (var item in path)
                //{
                //    try
                //    {
                //        Upload the file
                //        transferUtility.UploadAsync(item, bucketName).Wait();
                //        Console.WriteLine("File uploaded successfully!");

                //    }
                //    catch (Exception ex)
                //    {
                //        Console.WriteLine("Error uploading file: " + ex.Message);
                //    }

                //}




                //download single file


                //string destination = "D:/eve.jpg";
                //string fileKey = "eve.jpg";
                //try
                //{
                //    Download the file
                //    transferUtility.DownloadAsync(destination, bucketName, fileKey).Wait();
                //    Console.WriteLine("File downloaded successfully!");
                //}
                //catch (Exception ex)
                //{
                //    Console.WriteLine("Error downloading file: " + ex.Message);
                //}







                //downloading multipl files


                //List<string> files = new List<string>() { "eve.jpg", "alice.jpg", "bob.jpg" };
                //foreach (string file in files)
                //{
                //    string destination = $"D:/{file}";
                //    try
                //    {
                //        Download the file

                //        transferUtility.DownloadAsync(destination, bucketName, file).Wait();
                //        Console.WriteLine("File downloaded successfully!");
                //    }
                //    catch (Exception ex)
                //    {
                //        Console.WriteLine("Error downloading file: " + ex.Message);
                //    }
                //}
            }
        }
    }
}
