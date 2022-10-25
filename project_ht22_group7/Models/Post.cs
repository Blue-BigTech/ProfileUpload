using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace project_ht22_group7.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public int GameId { get; set; }
        public string UserId { get; set; }
        public string? MediaPath { get; set; }
        public string Content { get; set; }

        public User User { get; set; }
        public ICollection<Flag> Flags { get; set; }
        public ICollection<Coin> Conis { get; set; }
    }
}
