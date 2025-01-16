import SectionTitle from "../../components/SectionTitle"
import Title from "../../components/Title"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Checkout = () => {
    return (
        <>
            <div className="min-h-[65vh]">
                <Title title='Checkout' />
                <section className="w-11/12 md:container xl:w-9/12 mx-auto py-28 lg:py-40">
                    <SectionTitle
                        heading='Checkout'
                        subHeading='Complete the Payment To get the Application Form.'
                    />
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Checkout