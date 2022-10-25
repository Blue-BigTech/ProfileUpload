using Microsoft.AspNetCore.Mvc;
using project_ht22_group7.Models;
using System.Diagnostics;

namespace project_ht22_group7.Controllers
{
    public class ProfileController : Controller
    {
        private readonly ILogger<ProfileController> _logger;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProfileController(ILogger<ProfileController> logger, IWebHostEnvironment webHostEnvironment)
        {
            _logger = logger;
            this._webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("ProfilePicture")))
            {
                ViewBag.ProfilePicture = "img/defaultPP.png";
            }
            else
            {
                ViewBag.ProfilePicture = HttpContext.Session.GetString("ProfilePicture");
            }

            
                ViewBag.CardText = HttpContext.Session.GetString("CardText");

            return View();
        }

        public IActionResult Admin()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult ProfilePhoto(IFormFile photo)
        {
            if (photo == null || photo.Length == 0)
            {
                return Content("File not selected");
            }
            else
            {
                var path = Path.Combine(_webHostEnvironment.WebRootPath, "img/profile", photo.FileName);
                var stream = new FileStream(path, FileMode.Create);
                photo.CopyToAsync(stream);
                HttpContext.Session.SetString("ProfilePicture", "img/profile/" + photo.FileName);
            }
           
            return RedirectToAction("Index", "Profile");
        }

        public JsonResult UpdateCardText(string data)
        {
            HttpContext.Session.SetString("CardText", data);
            return Json("Success");
        }
    }
}