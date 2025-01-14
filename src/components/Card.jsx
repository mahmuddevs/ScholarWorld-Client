import { FaBook, FaDollarSign, FaGraduationCap, FaStar } from "react-icons/fa6";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
const Card = () => {
    return (
        <div className="card bg-[#f5faff] drop-shadow-xl">
            <figure className="relative">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                <div className="badge rounded-md h-auto px-2 py-1 absolute top-4 right-4 bg-white/40 border-0"><FaStar className="mr-1 fill-orange-400" />4/5</div>
            </figure>
            <div className="card-body p-4">
                <h4 className="card-title text-xl font-bold mb-2">Global Tech University</h4>
                <div className="space-y-2 text-sm  mb-2">
                    <p className="flex items-center">
                        <FaGraduationCap className="mr-2 text-brand-primary" />
                        <span className="font-medium">Undergraduate</span>
                    </p>
                    <p className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-brand-primary" />
                        <span>San Francisco, United States</span>
                    </p>
                    <p className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-brand-primary" />
                        <span><strong>Deadline:</strong> March 15, 2025</span>
                    </p>
                    <p className="flex items-center">
                        <FaBook className="mr-2 text-brand-primary" />
                        <span><strong>Subjects:</strong> Engineering & Technology</span>
                    </p>
                    <p className="flex items-center">
                        <FaDollarSign className="mr-2 text-brand-primary" />
                        <span><strong>Fees:</strong> $50</span>
                    </p>
                </div>
                <div className="card-actions">
                    <button className="btn h-10 min-h-10 bg-brand-primary hover:bg-brand-accent text-white rounded-lg border-0 px-6">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card