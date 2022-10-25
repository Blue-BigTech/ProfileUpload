using Microsoft.AspNetCore.Mvc;
using project_ht22_group7.Data;
using project_ht22_group7.Models;
using System.Diagnostics;

namespace project_ht22_group7.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;
        private readonly G2GContext _g2gContext;

        public LoginController(ILogger<LoginController> logger, G2GContext context)
        {
            _logger = logger;
            _g2gContext = context;
        }
        public IActionResult Index()
        {
            User user = _g2gContext.User.FirstOrDefault(u => u.Admin == true);
            if (user == null) return NotFound();

            Debug.WriteLine(user.UserId);
            return View();
        }
        public IActionResult Interests()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}