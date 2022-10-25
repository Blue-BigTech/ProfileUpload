using Microsoft.AspNetCore.Mvc;
using project_ht22_group7.Services;
using project_ht22_group7.ViewModels;
using project_ht22_group7.Models;
using project_ht22_group7.Data;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace project_ht22_group7.Controllers
{
    public class GameController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly GameService _gameService;
        private readonly G2GContext _g2GContext;

        public GameController(ILogger<HomeController> logger, GameService gameService, G2GContext context)
        {
            _logger = logger;
            _gameService = gameService;
            _g2GContext = context;
        }

        public async Task<IActionResult> Index([FromQuery] int gameId)
        {
            gameId = (gameId == 0) ? 10 : gameId;
            GameFollow gameFollow = await _g2GContext.GameFollow
                .FirstOrDefaultAsync(u => u.UserId == "Admin1" && u.GameId == gameId);

            GameData game = await _gameService.GetGame(gameId);
            game.UserFollow = (gameFollow == default) ? false : true;

            return View(game);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Follow(int gameId)
        {
            GameFollow gameFollow = new GameFollow() { UserId = "Admin1", GameId = gameId };
            _g2GContext.Add(gameFollow);
            _g2GContext.SaveChanges();

            return RedirectToAction(nameof(Index), new { gameId = gameId });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Unfollow(int gameId)
        {
            GameFollow gameFollow = await _g2GContext.GameFollow
                .FirstOrDefaultAsync(u => u.UserId == "Admin1" && u.GameId == gameId);

            _g2GContext.Remove(gameFollow);
            _g2GContext.SaveChanges();

            return RedirectToAction(nameof(Index), new { gameId = gameId});
        }
    }
}
