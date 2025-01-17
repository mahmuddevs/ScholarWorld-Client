import ApplicationTable from "./ApplicationTable";

const ManageApplications = () => {
    const applications = [
        {
            id: 1,
            name: "John Doe",
            universityName: "Harvard University",
            degree: "Master of Science",
            scholarshipCategory: "Full Scholarship",
            subjectCategory: "Computer Science",
            email: "john.doe@example.com",
            phone: "+1 234 567 890",
            applyDate: "2025-01-01",
            status: "pending"
        },
        {
            id: 2,
            name: "Jane Smith",
            universityName: "Stanford University",
            degree: "Bachelor of Arts",
            scholarshipCategory: "Partial Scholarship",
            subjectCategory: "Economics",
            email: "jane.smith@example.com",
            phone: "+1 987 654 321",
            applyDate: "2025-01-03",
            status: "processing"
        },
        {
            id: 3,
            name: "Samuel Johnson",
            universityName: "MIT",
            degree: "PhD in Physics",
            scholarshipCategory: "Research Fellowship",
            subjectCategory: "Physics",
            email: "samuel.johnson@example.com",
            phone: "+1 555 123 456",
            applyDate: "2025-01-05",
            status: "completed"
        },
        {
            id: 4,
            name: "Emily Davis",
            universityName: "University of Oxford",
            degree: "Master of Arts",
            scholarshipCategory: "Full Scholarship",
            subjectCategory: "History",
            email: "emily.davis@example.com",
            phone: "+1 333 444 555",
            applyDate: "2025-01-07",
            status: "pending"
        }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Applications</h1>
            <ApplicationTable applications={applications} />
        </div>
    )
}

export default ManageApplications