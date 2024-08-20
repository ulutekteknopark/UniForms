using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Models;
using uniforms.api.Interfaces;

namespace Uniforms.Uniforms.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyController(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        // GET: api/Company
        [HttpGet]
        public IActionResult Get()
        {
            var companies = _companyRepository.GetAllCompanies();
            return Ok(companies);
        }

        // GET: api/Company/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var company = _companyRepository.GetCompanyById(id);
            if (company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }

        // POST: api/Company
        [HttpPost]
        public IActionResult Post([FromBody] Company company)
        {
            if (company == null)
            {
                return BadRequest();
            }
            var createdCompany = _companyRepository.CreateCompany(company);
            return CreatedAtAction(nameof(Get), new { id = createdCompany.Id }, createdCompany);
        }

        // PUT: api/Company/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Company company)
        {
            if (company == null || id != company.Id)
            {
                return BadRequest();
            }
            var existingCompany = _companyRepository.GetCompanyById(id);
            if (existingCompany == null)
            {
                return NotFound();
            }
            var updatedCompany = _companyRepository.UpdateCompany(id);
            return Ok(updatedCompany);
        }

        // DELETE: api/Company/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existingCompany = _companyRepository.GetCompanyById(id);
            if (existingCompany == null)
            {
                return NotFound();
            }
            
                _companyRepository.DeleteCompany(id);
                return NoContent();
            
        }
    }
}