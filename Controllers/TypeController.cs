
using Microsoft.AspNetCore.Mvc;
using requirementsSys.Services;

namespace requirementsSys.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TypeController: ControllerBase
{
  private TypeService _typeService { get; set; }

  public TypeController(TypeService typeService)
  {
    _typeService = typeService;
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
}