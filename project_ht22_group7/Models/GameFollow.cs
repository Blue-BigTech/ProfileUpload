using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace project_ht22_group7.Models
{
    public class GameFollow
    {
        public int GameId { get; set; }
        public string UserId { get; set; }

        public User User { get; set; }
    }
}
