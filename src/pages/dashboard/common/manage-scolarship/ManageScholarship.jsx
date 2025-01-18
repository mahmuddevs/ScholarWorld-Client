import { useEffect, useRef, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useGetData from "../../../../hooks/useGetData";
import ManageScholarshipTable from "./ManageScholarshipTable";
import Swal from 'sweetalert2'
import EditModal from "./EditModal";
import { useForm } from "react-hook-form";
import axios from "axios";

const imagebb_key = import.meta.env.VITE_IMAGEBB_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${imagebb_key}`
const ManageScholarship = () => {
    const [fetchedData, isLoading, refetch] = useGetData('/scholarship')
    const [singleScholarship, setSingleScholarship] = useState({})
    const modalRef = useRef()
    const axiosBase = useAxios()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const { universityCity, universityCountry, universityImage, ...restData } = data;

        const scholarshipData = {
            ...restData,
            location: {
                country: universityCountry,
                city: universityCity
            }
        };

        let image;

        if (universityImage?.length > 0 && universityImage[0] instanceof File) {
            const img = { image: universityImage[0] };
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

        const updateData = image ? { ...scholarshipData, universityImage: image } : scholarshipData;

        axiosBase.patch(`/scholarship/update/${singleScholarship?._id}`, updateData)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Scholarship Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    modalRef.current.close()
                    refetch()
                }
            });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosBase.delete(`/scholarship/single/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Scholarship has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    const handleModal = (id) => {
        axiosBase.get(`/scholarship/single/${id}`)
            .then((res) => {
                setSingleScholarship(res?.data)
                modalRef.current.showModal()
            })
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Scholarships</h1>
            <EditModal modalRef={modalRef} scholarship={singleScholarship} register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} reset={reset} />
            <ManageScholarshipTable scholarships={fetchedData} loading={isLoading} handleDelete={handleDelete} handleModal={handleModal} />
        </div>
    )
}

export default ManageScholarship