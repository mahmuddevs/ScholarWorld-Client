import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I apply for a scholarship?",
            answer: "Select a scholarship, check the requirements, and follow the application link to submit your details.",
        },
        {
            question: "What documents are usually required?",
            answer: "Common documents include transcripts, recommendation letters, a personal statement, and proof of financial need.",
        },
        {
            question: "Can I apply for multiple scholarships at the same time?",
            answer: "Yes! You can apply for as many scholarships as you qualify for.",
        },
        {
            question: "Are scholarships available for international students?",
            answer: "Yes, many scholarships are open to international students.",
        },
        {
            question: "How can I stay updated on new scholarships?",
            answer: "Subscribe to our email alerts or enable push notifications to receive updates.",
        },
        {
            question: "What costs does a scholarship usually cover?",
            answer: "Coverage varies; some include tuition, living expenses, and travel, while others may only cover partial costs.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto my-14 lg:my-24">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border-b border-gray-200 py-4">
                            <button
                                className="flex justify-between items-center w-full text-left"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                {isOpen ? (
                                    <FaChevronUp className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                                ) : (
                                    <FaChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-base text-gray-500 py-2">{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
