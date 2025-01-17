import ReviewTable from "./ReviewTable";


const MyReviews = () => {
    const reviews = [
        {
            id: 1,
            scholarshipName: "Global Scholars Program",
            universityName: "Harvard University",
            comments: "Amazing opportunity for international students!",
            date: "2025-01-01",
        },
        {
            id: 2,
            scholarshipName: "Tech Pioneers Scholarship",
            universityName: "MIT",
            comments: "Highly recommend this for tech enthusiasts.",
            date: "2025-01-10",
        },
    ];

    const handleDelete = (id) => {
        console.log("Delete review with ID:", id);
    };

    const handleEdit = (id) => {
        console.log("Edit review with ID:", id);
    };
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
            <ReviewTable reviews={reviews} onDelete={handleDelete} onEdit={handleEdit} />
        </div>

    )
}

export default MyReviews