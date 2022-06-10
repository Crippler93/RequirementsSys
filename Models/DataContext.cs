using Microsoft.EntityFrameworkCore;

namespace requirementsSys.Models;

public class DataContext: DbContext
{
  public DataContext(DbContextOptions<DataContext> options): base(options)
  {
    
  }
  public DbSet<Type> Types { get; set; }
  public DbSet<Requirement> Requirements { get; set; }
}