using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace project_ht22_group7.Models
{
    public class Game
    {
        public int ID { get; set; }

        public ICollection<User> User { get; set; }
        public ICollection<Post> Post { get; set; }
    }
}
