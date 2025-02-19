

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
    { year: "2019", recipients: 120 },
    { year: "2020", recipients: 410 },
    { year: "2021", recipients: 500 },
    { year: "2022", recipients: 320 },
    { year: "2023", recipients: 280 },
    { year: "2024", recipients: 250 },
];

const SuccessChart = () => {
    return (
        <section className="w-11/12 md:container xl:w-9/12 mx-auto mb-14 lg:mb-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Scholarship Success Over the Years</h2>
                <p className="text-gray-600 mb-8">See how the number of successful scholarship recipients has grown over the years.</p>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="year" stroke="#333" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="recipients" fill="#0066cc" barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default SuccessChart;
