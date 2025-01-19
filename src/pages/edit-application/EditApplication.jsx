import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useScholarshipByID from "../../hooks/useScholarshipByID"
import useAxios from "../../hooks/useAxios"
import useAuth from "../../hooks/useAuth"
import Title from "../../components/Title"
import SectionTitle from "../../components/SectionTitle"
import { useForm } from "react-hook-form"
import axios from "axios"
import useUser from "../../hooks/useUser"
import Swal from "sweetalert2"
import EditApplicationForm from "./EditApplicationForm"
import { useQuery } from "@tanstack/react-query"
import useAggregatedData from "../../hooks/useAggregatedData"

const imagebb_key = import.meta.env.VITE_IMAGEBB_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${imagebb_key}`


const EditApplication = () => {
    const axiosBase = useAxios()
    const { id } = useParams()
    const formRef = useRef()
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    useEffect(() => {
        axiosBase.get(`/application/single-with-scolarship/${id}`)
            .then((res) => {
                if (res.data) {
                    const { phone, address, gender, degree, sscResult, hscResult, studyGap, universityName, scholarshipCategory, subjectCategory } = res.data
                    reset({
                        phone,
                        address,
                        gender,
                        degree,
                        sscResult,
                        hscResult,
                        studyGap,
                        universityName,
                        scholarshipCategory,
                        subjectCategory
                    })
                }
            })
    }, [])


    const onSubmit = async (data) => {
        let image;

        if (data.photo?.length > 0 && data?.photo[0] instanceof File) {
            const img = { image: data?.photo[0] };
            try {
                const res = await axios.post(hostingApi, img, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                image = res?.data?.data?.display_url;
            } catch (error) {
                console.error('Error uploading image:', error.response || error.message);
            }
        }


        const { photo, scholarshipCategory, subjectCategory, universityName, ...restData } = data

        const updateData = image ? { ...restData, photo: image } : { ...restData };

        axiosBase.patch(`/application/edit/${id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application Updated Successfully",
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

    return (
        <>
            <Title title='Application Form' />
            <section className="w-11/12 md:container xl:w-9/12 mx-auto pt-24 lg:pt-36">
                <SectionTitle
                    heading='Scholarship Application Form'
                    subHeading='Please fill out all required fields accurately to ensure your application is processed promptly.' />
            </section>
            <EditApplicationForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} formRef={formRef} />
        </>
    )
}

export default EditApplication