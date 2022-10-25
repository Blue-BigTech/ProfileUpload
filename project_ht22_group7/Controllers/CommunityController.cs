using Microsoft.AspNetCore.Mvc;

namespace project_ht22_group7.Controllers
{
    public class CommunityController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public CommunityController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
