using System.Collections;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace project_ht22_group7.Models
{
    public class User
    {
        [Required]
        public string UserId { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public bool Admin { get; set; }
        public string? ImageSrc { get; set; }
        public string? Bio { get; set; }

        public ICollection<Post> Posts { get; set; }
        public ICollection<Flag> Flags { get; set; }
        public ICollection<Coin> Coins { get; set; }
        public ICollection<GameFollow> GamesFollow { get; set; }
    }
}
