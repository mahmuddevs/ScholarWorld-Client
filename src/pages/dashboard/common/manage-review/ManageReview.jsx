import ReviewsTable from "./ReviewsTable"

const ManageReview = () => {
    const reviews = [
        {
            id: 1,
            universityName: "University A",
            subjectCategory: "Engineering",
            reviewerImage: "/path/to/image.jpg",
            reviewerName: "John Doe",
            reviewDate: "2025-01-01",
            rating: 4,
            comments: "Great university with amazing faculty!",
        },
        {
            id: 2,
            universityName: "University B",
            subjectCategory: "Science",
            reviewerImage: "/path/to/image2.jpg",
            reviewerName: "Jane Smith",
            reviewDate: "2025-01-15",
            rating: 5,
            comments: "Best experience, highly recommended!",
        },
    ];

    // const handleDeleteReview = () => {

    // }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Reviews</h1>
            <ReviewsTable reviews={reviews} />
        </div>
    )
}

export default ManageReview