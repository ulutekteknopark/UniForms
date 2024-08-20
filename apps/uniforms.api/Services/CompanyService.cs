using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace uniforms.api.Services
{
    public class CompanyService : ICompanyService
    {
    public Task<Uniforms.Models.Company> CreateCompany(Uniforms.Models.Company company)
    {
      throw new NotImplementedException();
    }

    public Task DeleteCompany(int companyId)
    {
      throw new NotImplementedException();
    }

    public Task<IEnumerable<Uniforms.Models.Company>> GetAllCompanies()
    {
      throw new NotImplementedException();
    }

    // Add your methods and properties here

    // Example method to get a list of companies


    public Task<Uniforms.Models.Company> GetCompanyById(int companyId)
    {
      throw new NotImplementedException();
    }

    public Task<Uniforms.Models.Company> UpdateCompany(Uniforms.Models.Company company)
    {
      throw new NotImplementedException();
    }
  }


}