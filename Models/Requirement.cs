namespace requirementsSys.Models;

public class Requirement
{
  public int RequirementID { get; set; }
  public string? Title { get; set; }
  public string? Description { get; set; }
  public requirementsSys.Models.Type? Type { get; set; }
}