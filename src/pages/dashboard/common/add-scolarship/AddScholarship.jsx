import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import ScholarshipForm from "./ScholarshipForm"
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import Title from "../../../../components/Title";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const imagebb_key = import.meta.env.VITE_IMAGEBB_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${imagebb_key}`
const AddScholarship = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const { universityCity, universityCountry, ...restData } = data

        const scolarshipData = {
            ...restData,
            location: {
                country: universityCountry,
                city: universityCity
            }
        }

        const img = { image: data.universityImage[0] }
        const res = await axios.post(hostingApi, img, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const image = res?.data?.data?.display_url
        if (image) {
            axiosSecure.post('/scholarship/add', { ...scolarshipData, universityImage: image, userEmail: user?.email })
                .then((res) => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Scholarship Added Succesfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset()
                    }
                })
        }
    };
    return (
        <div className="p-4">
            <Title title="Add Scholrship" />
            <ScholarshipForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} reset={reset} />
        </div>

    )
}

export default AddScholarship