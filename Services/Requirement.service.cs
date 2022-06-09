using Microsoft.EntityFrameworkCore;
using requirementsSys.Models;
public class RequirementService
{
  private DataContext _context { get; set; }
  public RequirementService(DataContext context)
  {
    _context = context;
  }
  public async Task<List<Requirement>> getAllRequirements()
  {
    return await this._context.Requirements.Include(r => r.Type).ToListAsync();
  }

  public async Task createRequirement(Requirement requirement)
  {
    var type = await this._context.Types.FirstOrDefaultAsync(types => types.TypeID == requirement.TypeID);
    if (type != null) {
      requirement.Type = type;
    }
    this._context.Requirements.Add(requirement);
    await this._context.SaveChangesAsync();
  }

  public async Task updateRequirement(Requirement requirement)
  {
    this._context.Requirements.Update(requirement);
    await this._context.SaveChangesAsync();
  }
}