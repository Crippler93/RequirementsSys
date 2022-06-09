using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class RequirementController: ControllerBase
{
  private RequirementService _service { get; set; }
  public RequirementController(RequirementService requirementService)
  {
    _service = requirementService;
  }

  [HttpGet]
  public async Task<IEnumerable<Requirement>> Get()
  {
    return await this._service.getAllRequirements();
  }

  [HttpPost]
  public async Task<IActionResult> Post(Requirement newRequirement)
  {
    await this._service.createRequirement(newRequirement);
    return CreatedAtAction(nameof(Get), new { id = newRequirement.RequirementID }, newRequirement);
  }

  [HttpPut]
  public async Task<IActionResult> Put(Requirement requirement)
  {
    await this._service.updateRequirement(requirement);
    return Ok();
  }
}