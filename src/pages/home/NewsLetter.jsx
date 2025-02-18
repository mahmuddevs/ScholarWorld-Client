import Swal from "sweetalert2";

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target?.email.value

        if (email) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Subcribed to Newsletter",
                showConfirmButton: false,
                timer: 1500
            });

            e.target.reset()
        }

    }
    return (
        <section className="bg-slate-300 mb-14 lg:mb-24">
            <div className="w-11/12 md:container xl:w-9/12 mx-auto py-14 lg:py-24 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
                    Stay Updated!
                </h2>
                <p className="text-brand-text mt-4 text-lg">
                    Subscribe to our newsletter and never miss out on the latest updates and exclusive offers.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-auto px-4 py-3 border border-brand-secondary rounded-lg text-brand-text bg-white focus:ring-2 focus:ring-brand-primary outline-none"
                    />
                    <button type="submit" className="bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-accent transition-all">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
}
export default NewsLetter