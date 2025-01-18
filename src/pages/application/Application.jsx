import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useScholarshipByID from "../../hooks/useScholarshipByID"
import useAxios from "../../hooks/useAxios"
import useAuth from "../../hooks/useAuth"
import Title from "../../components/Title"
import SectionTitle from "../../components/SectionTitle"
import { useForm } from "react-hook-form"
import axios from "axios"
import ApplicationForm from "./ApplicationForm"
import useUser from "../../hooks/useUser"
import Swal from "sweetalert2"

const imagebb_key = import.meta.env.VITE_IMAGEBB_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${imagebb_key}`


const Application = () => {
    const { user } = useAuth()
    const axiosBase = useAxios()
    const { id } = useParams()
    const [scholarship] = useScholarshipByID(id)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const formRef = useRef()
    const navigate = useNavigate()
    const [userData, userLoading] = useUser()

    const { _id, email, displayName } = userData


    const onSubmit = async (data) => {
        const img = { image: data.photo[0] }
        const res = await axios.post(hostingApi, img, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const image = res?.data?.data?.display_url

        const applicationData = { ...data, photo: image, userID: _id, email, displayName, scolarshipID: id }

        if (image) {
            axiosBase.post('/application/add', applicationData)
                .then(res => {
                    if (res.data) {
                        console.log(res.data.acknowledged)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Application Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset()
                        navigate(`/dashboard/my-applications`)
                    }
                }).catch((err) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Application Failed",
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
    }

    const readOnlyData = {
        universityName: scholarship.universityName,
        scholarshipCategory: scholarship.scholarshipCategory,
        subjectCategory: scholarship.subjectCategory
    }

    return (
        <>
            <Title title='Application Form' />
            <section className="w-11/12 md:container xl:w-9/12 mx-auto pt-24 lg:pt-36">
                <SectionTitle
                    heading='Scholarship Application Form'
                    subHeading='Please fill out all required fields accurately to ensure your application is processed promptly.' />
            </section>
            <ApplicationForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} formRef={formRef} {...readOnlyData} />
        </>
    )
}

export default Application