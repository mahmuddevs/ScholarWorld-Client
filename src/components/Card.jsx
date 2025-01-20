import { FaBook, FaDollarSign, FaGraduationCap, FaStar } from "react-icons/fa6";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Card = ({ _id, averageRating, scholarshipName, universityName, universityImage, scholarshipCategory, location, applicationDeadline, subjectCategory, applicationFees, degree
}) => {
    return (
        <div className="card bg-[#f5faff] drop-shadow-xl">
            <figure className="relative h-60">
                <img
                    src={universityImage}
                    alt={universityName + "logo"}
                    className="rounded-xl" />
                <div className="badge rounded-md h-auto px-2 py-1 absolute top-4 right-4 bg-white/40 border-0"><FaStar className="mr-1 fill-orange-400" />{averageRating}/5</div>
            </figure>
            <div className="card-body p-4">
                <h4 className="text-lg font-bold">{scholarshipName}</h4>
                <h3 className="card-title text-xl font-bold mb-2">{universityName}</h3>
                <div className="space-y-2 text-sm  mb-2">
                    <p className="flex items-center">
                        <FaGraduationCap className="mr-2 text-brand-primary" />
                        <span className="font-medium">{scholarshipCategory}</span>
                    </p>
                    <p className="flex items-center">
                        <PiCertificateFill className="mr-2 text-brand-primary" />
                        <span className="font-medium">{degree}</span>
                    </p>
                    <p className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-brand-primary" />
                        <span>{location?.city}, {location?.country}</span>
                    </p>
                    <p className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-brand-primary" />
                        <span><strong>Deadline:</strong>{applicationDeadline}</span>
                    </p>
                    <p className="flex items-center">
                        <FaBook className="mr-2 text-brand-primary" />
                        <span><strong>Subjects:</strong>{subjectCategory}</span>
                    </p>
                    <p className="flex items-center">
                        <FaDollarSign className="mr-2 text-brand-primary" />
                        <span><strong>Fees:</strong> ${applicationFees}</span>
                    </p>
                </div>
                <div className="card-actions mt-auto">
                    <Link to={`/scholarship/${_id}`} className="btn h-10 min-h-10 bg-brand-primary hover:bg-brand-accent text-white rounded-lg border-0 px-6">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card