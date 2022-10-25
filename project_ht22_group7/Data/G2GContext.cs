using project_ht22_group7.Models;
using Microsoft.EntityFrameworkCore;

namespace project_ht22_group7.Data
{
    public class G2GContext : DbContext
    {
        public G2GContext(DbContextOptions<G2GContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Post> Post { get; set; }
        //public DbSet<Game> Game { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<GameFollow> GameFollow { get; set; }
        public DbSet<Flag> Flag { get; set; }
        public DbSet<Coin> Coin { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Post>().ToTable("Post");
            //modelBuilder.Entity<Game>().ToTable("Game");
            modelBuilder.Entity<Event>().ToTable("Event");
            modelBuilder.Entity<GameFollow>().ToTable("GameFollow").HasKey(e => new { e.GameId, e.UserId });
            modelBuilder.Entity<Flag>().ToTable("Flag").HasKey(e => new { e.PostId, e.UserId });
            modelBuilder.Entity<Coin>().ToTable("Coin").HasKey(e => new { e.PostId, e.UserId });
            modelBuilder.Entity<Coin>().HasOne(e => e.User).WithMany(e => e.Coins).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Flag>().HasOne(e => e.User).WithMany(e => e.Flags).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
