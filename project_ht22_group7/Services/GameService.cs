using project_ht22_group7.Models;
using project_ht22_group7.ViewModels;

namespace project_ht22_group7.Services
{
    public class GameService
    {
        private readonly HttpClient _httpClient;

        public GameService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public Task<Game[]> GetAllGames() => _httpClient.GetFromJsonAsync<Game[]>("https://api.steampowered.com/ISteamApps/GetAppList/v2/");

        public async Task<GameData> GetGame(int appId)
        {
            var response = await _httpClient
                .GetFromJsonAsync<Dictionary<string, GameResponse>>("https://store.steampowered.com/api/appdetails?appids=" + appId);

            return response[appId.ToString()].Data;
        }

        private class GameResponse
        {
            public GameData Data { get; set; }
        }
    }
}
