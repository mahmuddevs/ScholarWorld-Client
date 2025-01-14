const Card = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="p-4">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn h-10 min-h-10 bg-brand-primary hover:bg-brand-accent text-white">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card