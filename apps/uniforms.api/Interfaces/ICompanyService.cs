using Uniforms.Models;

public interface ICompanyService
{
    Task<Company> GetCompanyById(int companyId);
    Task<IEnumerable<Company>> GetAllCompanies();
    Task<Company> CreateCompany(Company company);
    Task<Company> UpdateCompany(Company company);
    Task DeleteCompany(int companyId);
}