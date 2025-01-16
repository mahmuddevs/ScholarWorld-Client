const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center text-brand-text space-y-4 mb-7 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold">{heading}</h2>
            <p className="text-base md:text-lg font-medium">{subHeading}</p>
        </div>
    )
}

export default SectionTitle