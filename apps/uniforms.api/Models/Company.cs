using Google.Cloud.Firestore;
using System.Collections.Generic;


namespace Uniforms.Models {

    public class Company : BaseEntity {


    /* 

id, Get by id, create, update, delete -> işlemleri yapılması
    
    */
        [FirestoreProperty]

        //summary 
        //CompanyID is the primary key of the Company table
        public int CompanyID { get; set; }

        //summary
        //Name is the name of the company
        [FirestoreProperty]
        public string? Name { get; set; }

        //summary
        //Users is the list of users that belong to the company
        [FirestoreProperty]
        public List<User>? Users { get; set; }

        //summary
        //Forms is the list of forms that belong to the company

        [FirestoreProperty]
        public List<Form>? Forms { get; set; }

        //summary
        //Submissions is the list of submissions that belong to the company

        [FirestoreProperty]
        public List<Submission>? Submissions { get; set; }

        //summary
        //Integrations is the list of integrations that belong to the company

        [FirestoreProperty]
        public List<Integration>? Integrations { get; set; }

    }
}