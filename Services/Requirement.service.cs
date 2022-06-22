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

  public async Task<Requirement?> createRequirement(RequirementDTO requirement)
  {
    var type = await this._context.Types.FirstOrDefaultAsync(types => types.TypeID == requirement.TypeID);

    if (type != null)
    {
      var newRequirement = new Requirement() { Title = requirement.Title, Description = requirement.Description, Type = type };
      this._context.Requirements.Add(newRequirement);
      await this._context.SaveChangesAsync();
      return newRequirement;
    }
    return null;
  }

  public async Task updateRequirement(RequirementDTO requirement, int id)
  {
    var foundedRequirement = await this._context.Requirements.FirstOrDefaultAsync(requirements => requirements.RequirementID == id);
    var type = await this._context.Types.FirstOrDefaultAsync(types => types.TypeID == requirement.TypeID);
    if (foundedRequirement != null)
    {
      foundedRequirement.Description = String.IsNullOrEmpty(requirement.Description) ? foundedRequirement.Description : requirement.Description;
      foundedRequirement.Title = String.IsNullOrEmpty(requirement.Title) ? foundedRequirement.Title : requirement.Title;
      foundedRequirement.Type = (type != null) ? type : foundedRequirement.Type;
      this._context.Requirements.Update(foundedRequirement);
      await this._context.SaveChangesAsync();

    }
  }

  public async Task<Requirement?> getRequirementByID(int id)
  {
    return await this._context.Requirements.FirstOrDefaultAsync(requirements => requirements.RequirementID == id);
  }

  private async Task<List<Requirement>> GetRequirementsByTypeID(int typeId)
  {
    return await this._context.Requirements.Include(req => req.Type).Where(req => req.Type.TypeID == typeId).ToListAsync();
  }

  public async Task RemoveTypeIDFromRequirements(int typeId)
  {
    var requirements = await this.GetRequirementsByTypeID(typeId);
    foreach (var requirement in requirements)
    {
      requirement.Type = null;
    }
    await this._context.SaveChangesAsync();
  }
}