import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import useGetData from '../../../../hooks/useGetData';

const DashboardHome = () => {
    // Example data for cards


    // Example data for the bar chart
    const applicationData = [
        { name: 'Scholarship A', count: 50 },
        { name: 'Scholarship B', count: 30 },
        { name: 'Scholarship C', count: 70 },
        { name: 'Scholarship D', count: 40 },
        { name: 'Scholarship E', count: 60 },
        { name: 'Scholarship F', count: 30 },
    ];

    // Example data for the pie chart
    const reviewData = [
        { name: 'Scholarship A', value: 25 },
        { name: 'Scholarship B', value: 15 },
        { name: 'Scholarship C', value: 30 },
        { name: 'Scholarship D', value: 10 },
        { name: 'Scholarship E', value: 20 },
    ];

    const [fetchedData, isLoading, refetch] = useGetData('/scholarship/details')

    const { totalScholarships, totalApplications, totalReviews, highestReviews, highestApplication } = fetchedData

    const dataCounts = {
        scholarships: totalScholarships,
        applications: totalApplications,
        reviews: totalReviews,
    };

    // Colors for the pie chart
    const pieColors = ['#0066cc', '#8a8aef', '#4242fa', '#1b1b27', '#f5faff'];

    return (
        <div className="p-6 bg-brand-background min-h-screen">
            <h1 className="text-3xl font-bold text-brand-text mb-6">Dashboard</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {Object.entries(dataCounts).map(([key, value]) => (
                    <div key={key} className="bg-brand-primary text-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold capitalize">{key}</h2>
                        <p className="text-4xl font-bold mt-4">{value}</p>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold text-brand-text mb-4">Application Counts</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={highestApplication}>
                            <XAxis dataKey="scholarshipName" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="applicationCount" fill="#0066cc" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold text-brand-text mb-4">Most Reviewed Scholarships</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={highestReviews}
                                dataKey="averageRating"
                                nameKey="scholarshipName"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {reviewData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
