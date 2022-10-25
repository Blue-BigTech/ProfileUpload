using System.Text.Json;
using System.Text.Json.Serialization;

namespace project_ht22_group7.ViewModels
{
    public class GameData
    {
        [JsonPropertyName("steam_appid")]
        public int AppID { get; set; }
        public string Name { get; set; }
        [JsonPropertyName("about_the_game")]
        public string About { get; set; }
        public List<Category> Categories { get; set; }
        public List<Genre> Genres { get; set; }
        public List<Screenshot> Screenshots { get; set; }

        [JsonIgnore]
        public bool UserFollow { get; set; }
    }

    public class Category
    {
        public string Description { get; set; }
    }

    public class Genre
    {
        public string Description { get; set; }
    }

    public class Screenshot
    {
        [JsonPropertyName("path_thumbnail")]
        public string ImgPath { get; set; }
    }
}