namespace Uniforms.Models
{
    public class Integration : BaseEntity{
        [FirestoreProperty]
        // summary
        // The name of the integration
        public string? Name { get; set; }
        
        [FirestoreProperty]
        // summary
        // The description of the integration
        public string? Description { get; set; }

        [FirestoreProperty]
        // summary
        // The token of the integration
        public string? Token { get; set; }

        [FirestoreProperty]
        // summary
        // The URL of the integration

        public string? Url { get; set; }
        
        [FirestoreProperty]
        // summary
        // The type of the integration
        public string? Type { get; set; }

        [FirestoreProperty]
        // summary
        // The status of the integration
        public string? Status { get; set; }
    }

}