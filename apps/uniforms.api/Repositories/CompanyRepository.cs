using System.Collections.Generic;
using System.Linq;
using Uniforms.Models;

namespace uniforms.api.Repositories
{
    public class CompanyRepository
    {
        private readonly List<Company> _companies;

        public CompanyRepository()
        {
            _companies = new List<Company>();
        }

        public void AddCompany(Company company)
        {
            _companies.Add(company);
        }

        public void RemoveCompany(Company company)
        {
            _companies.Remove(company);
        }

        public List<Company> GetAllCompanies()
        {
            return _companies.ToList();
        }

        public Company GetCompanyById(int id)
        {
            return _companies.FirstOrDefault(c => c.Id == id);
        }
    }
}