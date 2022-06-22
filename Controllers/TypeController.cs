
using Microsoft.AspNetCore.Mvc;
using requirementsSys.Services;

namespace requirementsSys.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TypeController: ControllerBase
{
  private TypeService _typeService { get; set; }
  private RequirementService _requirementService { get; set; }

  public TypeController(TypeService typeService, RequirementService requirementService)
  {
    _typeService = typeService;
    _requirementService = requirementService;
  }

  [HttpGet]
  public async Task<IEnumerable<Models.Type>> Get() 
  {
    return await _typeService.getTypes();
  }

  [HttpPost]
  public async Task<IActionResult> Post(Models.Type newType)
  {
    await _typeService.createType(newType);
    return CreatedAtAction(nameof(Get), new { id = newType.TypeID }, newType);
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(int id)
  {
    await _requirementService.RemoveTypeIDFromRequirements(id);
    await _typeService.deleteType(id);
    return Ok();
  }
}