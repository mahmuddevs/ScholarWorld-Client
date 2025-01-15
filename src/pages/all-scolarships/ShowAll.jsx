import { useState } from "react";
import useScolarships from "../../hooks/useScolarships"

const ShowAll = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [scolarships, isLoading, refetch] = useScolarships()
    const totalPages = 10
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log(currentPage)
    return (
        <section>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="btn"
                >
                    Previous
                </button>

                <div className="join">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="btn"
                >
                    Next
                </button>
            </div>
        </section>
    )
}

export default ShowAll