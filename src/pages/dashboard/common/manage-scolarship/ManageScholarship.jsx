import ManageScholarshipTable from "./ManageScholarshipTable";

const ManageScholarship = () => {
    const dummyScholarships = [
        {
            id: 1,
            scholarshipName: "Full Ride Scholarship",
            universityName: "Harvard University",
            subjectCategory: "Engineering",
            degree: "Master's",
            applicationFees: 300,
        },
        {
            id: 2,
            scholarshipName: "Undergraduate Grant",
            universityName: "Stanford University",
            subjectCategory: "Business",
            degree: "Bachelor's",
            applicationFees: 100,
        },
    ];
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Scholarships</h1>
            <ManageScholarshipTable scholarships={dummyScholarships} />
        </div>
    )
}

export default ManageScholarship