using Microsoft.EntityFrameworkCore;
using requirementsSys.Models;

namespace requirementsSys.Services;

public class TypeService
{
  private DataContext _context { get; set; }

  public TypeService(DataContext context)
  {
      _context = context;
  }

  public async Task<List<Models.Type>> getTypes()
  {
    return await this._context.Types.ToListAsync();
  }

  public async Task createType(Models.Type type)
  {
    this._context.Types.Add(type);
    await this._context.SaveChangesAsync();
    return;
  }

  public async Task deleteType(int id)
  {
    Models.Type? type = await _context.Types.FirstOrDefaultAsync(types => types.TypeID == id);
    if (type != null) {
      this._context.Types.Remove(type);
      await this._context.SaveChangesAsync();
    }
  }
}