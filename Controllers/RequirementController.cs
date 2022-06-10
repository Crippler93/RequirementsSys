using Microsoft.AspNetCore.Mvc;

using requirementsSys.Models;

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
  public async Task<IActionResult> Post(RequirementDTO newRequirement)
  {
    var requirement = await this._service.createRequirement(newRequirement);
    if (requirement != null)
    {
      return CreatedAtAction(nameof(Get), new { id = requirement.RequirementID }, newRequirement);
    }
    return StatusCode(500);
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> Put(int id, RequirementDTO requirement)
  {
    await this._service.updateRequirement(requirement, id);
    return Ok();
  }
}