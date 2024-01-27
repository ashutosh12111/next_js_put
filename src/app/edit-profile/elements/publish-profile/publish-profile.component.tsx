"use client"
import CustomButton from '@/components/atoms/button'
import { CONSTANTS } from '@/constants'
import { useAuthContext } from '@/context/auth-context'
import { useBioContext } from '@/context/bio-context'
import { scrollToBioError } from '@/helpers/utils'
import useLoadingError from '@/hooks/useLoadingError'
import { publishBio } from '@/services/biography'
import { TOASTR_TYPES } from '@/types'
import { showToast } from '@/utils'
import getTokenClientSide from '@/utils/getTokenClientSide'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const PublishProfileComponent = ({ profile }: any) => {

  const { loading, startLoading, stopLoading } = useLoadingError()
  const { user } = useAuthContext();
  const { formikBio } = useBioContext()
  const router = useRouter()
  console.log('===profile', profile)


  const handleClick = async () => {

    if (profile?.admin_publish_hidden == CONSTANTS.USER_PROFILE_STATUS.HIDDEN) {
      showToast(toast, TOASTR_TYPES.ERROR, "The admin has hidden your profile, contact support for help")
      return
    }

    try {

      formikBio?.submitForm()
      if (!formikBio?.errors?.biography) {

        if (!profile?.first_name || !profile?.last_name || !profile?.dob || !profile?.profession || !profile?.country) {
          showToast(toast, TOASTR_TYPES.ERROR, "Please fill the required fields in personal info");
          return
        }


       startLoading();

       setTimeout(() => {

        if (user?.is_publish == 0 && profile?.admin_publish_hidden == "") {
          window.location.href= process.env.NEXT_PUBLIC_API_BASE_URL + `/api/stripe/checkout?email=${encodeURIComponent(user?.email)}`;
          stopLoading()

        } else {

          publishBio(getTokenClientSide()).then((res: any) => {
            router.refresh()
            router.push("/my-profile")
            showToast(toast, TOASTR_TYPES.SUCCESS, res?.message)
          }).catch((err: any) => {
            showToast(toast, TOASTR_TYPES.SUCCESS, err?.response?.message)
          }).finally(() => {
            stopLoading()
          })

        }

       },1500)

      } else {

        scrollToBioError()

      }


    } catch (err: any) {

      showToast(toast, TOASTR_TYPES.ERROR, err?.response?.message)

    }

  }



  return (
    <>
      <CustomButton title="Publish" variant='custom' className="py-9 px-24 bg-white-button hover:bg-hover-white-button transition duration-[0.4s] text-gray-500 text-14 font-medium leading-20 rounded-xl focus:outline-none" onClick={handleClick} loading={loading} />
    </>
  )
}

export default PublishProfileComponent