using project_ht22_group7.Models;

namespace project_ht22_group7.Data
{
    public class DbInitializer
    {
        public static void Initialize(G2GContext context)
        {
            // Look for any students.
            if (context.User.Any())
            {
                return;   // DB has been seeded
            }

            var users = new User[]
            {
                //new User{Username="Admin1",Password="Pass1", Admin=true, ImageSrc="", Bio=""},
                //new User{Username="Admin2",Password="Pass2", Admin=true, ImageSrc="", Bio=""},
                //new User{Username="Admin3",Password="Pass3", Admin=true, ImageSrc="", Bio=""},
                //new User{Username="Admin4",Password="Pass4", Admin=true, ImageSrc="", Bio=""},
                //new User{Username="Admin5",Password="Pass5", Admin=true, ImageSrc="", Bio=""}
                new User{UserId="Admin1",Password="Pass1", Admin=true}
            };

            context.User.AddRange(users);
            context.SaveChanges();
        }
    }
}
