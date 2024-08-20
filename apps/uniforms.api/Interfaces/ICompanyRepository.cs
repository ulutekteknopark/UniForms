using System.Collections.Generic;
using System.Threading.Tasks;
using Uniforms.Models;

namespace uniforms.api.Interfaces
{
    public interface ICompanyRepository
    {
        Task<IEnumerable<Company>> GetAllCompanies();
        Task<Company> GetCompanyById(int companyId);
        Task<Company> CreateCompany(Company company);
        Task<Company> UpdateCompany(int companyId);
        Task<bool> DeleteCompany(int companyId);
    }
}