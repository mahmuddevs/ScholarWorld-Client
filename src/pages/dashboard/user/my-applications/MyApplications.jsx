import ApplicationTable from "./ApplicationTable";

const MyApplications = () => {
    const applications = [
        {
            id: 1,
            universityName: "Oxford University",
            universityAddress: "Oxford, UK",
            feedback: "Great progress!",
            subjectCategory: "Science",
            appliedDegree: "PhD",
            applicationFees: 300,
            serviceCharge: 50,
            status: "completed",
        },
        {
            id: 2,
            universityName: "Harvard University",
            universityAddress: "Cambridge, MA, USA",
            feedback: "",
            subjectCategory: "Engineering",
            appliedDegree: "Master's",
            applicationFees: 400,
            serviceCharge: 70,
            status: "pending",
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Applications</h1>
            <ApplicationTable applications={applications} />
        </div>
    );
}

export default MyApplications