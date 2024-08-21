namespace Uniforms.Models{
    public class User: BaseEntity{
    
        [FirestoreProperty]
        //summary
        //The name of the user
        public string? Name { get; set; }

        [FirestoreProperty]
        //summary
        //The surname of the user
        public string? Surname { get; set; }

        [FirestoreProperty]
        //summary
        //The email of the user
        public string? Email { get; set; }

        [FirestoreProperty]
        //summary
        //The password of the user
        public string? Password { get; set; }

        [FirestoreProperty]
        //summary
        //The role of the user
        public string? Role { get; set; }

        [FirestoreProperty]
        //summary
        //The company ID of the user
        public string? CompanyID { get; set; }
    }
}