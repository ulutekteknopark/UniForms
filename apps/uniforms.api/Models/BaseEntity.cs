using Google.Cloud.Firestore;

namespace Uniforms.Models {
    public class BaseEntity {

        // summary
        // The ID of the entity
        [FirestoreProperty]
        public int Id { get; set; }
    }
}