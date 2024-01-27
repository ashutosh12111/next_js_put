"use client"
import React, { useEffect, useState } from 'react'
import { IPersonalDetailModalModal } from './personal-detail-modal.types'
import PersonalDetailModalComponent from './personal-detail-modal.component'
import { useFormik } from 'formik'
import { personalInfoSchema } from '@/validations/personal-info-schema'
import getTokenClientSide from '@/utils/getTokenClientSide'
import { updateProfile } from '@/services/auth'
import { toast } from 'react-toastify'
import { useAuthContext } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import { showToast } from '@/utils'
import { TOASTR_TYPES } from '@/types'
import { formatWebsiteUrl } from '@/helpers/utils'

const PersonalDetailModalContainer = (props: IPersonalDetailModalModal) => {

  const router = useRouter()
  const token = getTokenClientSide()
  const { user, getProfile } = useAuthContext();
  const [isDisabled, setIsDisabled] = useState(false)


  useEffect(() => {

    formik.setValues({
      firstName: user?.first_name,
      lastName: user?.last_name,
      country: user?.country,
      city: user?.city,
      dob: user?.dob,
      profession: user?.profession,
      officeName: user?.office_name,
      education: user?.education,
      image: user?.image,
      height:  user?.height,
      website:user?.website,
      twitterLink:user?.twitter_link,
      linkedinLink: user?.linkedin_link
      
    })

    console.log(user, "user>>>>>")

  }, [user, props?.isOpen])

  const setInitialValues = () => {

    formik.setValues({
      firstName: user?.first_name,
      lastName: user?.last_name,
      country: user?.country,
      city: user?.city,
      dob: user?.dob,
      profession: user?.profession,
      officeName: user?.office_name,
      education: user?.education,
      image: user?.image,
      height:  user?.height,
      website:user?.website,
      twitterLink:user?.twitter_link,
      linkedinLink: user?.linkedin_link
    })

  }

  useEffect(() => {

    if (!props?.isOpen) {
      setInitialValues()
    }

  }, [props?.isOpen])



  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      dob: "",
      profession: "",
      officeName: "",
      education: "",
      image: "",
      height:  "",
      website:"",
      twitterLink:"",
      linkedinLink: ""
    },
    validationSchema: personalInfoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values: any) => {


      try {

        const res: any = await updateProfile(token, {
          first_name: values.firstName,
          last_name: values.lastName,
          country: values.country,
          city: values.city,
          dob: values.dob,
          profession: values.profession,
          office_name: values.officeName,
          education: values.education,
          image: values.image,
          height:  values?.height,
          website: formatWebsiteUrl(values?.website),
          twitter_link:formatWebsiteUrl(values?.twitterLink),
          linkedin_link: formatWebsiteUrl(values?.linkedinLink)
        });

        getProfile();
        props?.toggle()
        showToast(
          toast,
          TOASTR_TYPES.SUCCESS,
          res?.message,
          "Success!"
        );
        router.refresh()
      } catch (err: any) {
        toast(err?.response?.data?.message)
      }


    },
  });


  return (
    <PersonalDetailModalComponent {...props} formik={formik} isDisabled={isDisabled} setIsDisabled={isDisabled} />
  )
}

export default PersonalDetailModalContainer