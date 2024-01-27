"use client"
import BiographyEditable from '@/components/organisms/biography/biography-editable'
import { initialBioValues } from '@/constants'
import { useBioContext } from '@/context/bio-context'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'


const AddBioComponent = ({ profile }: any) => {

  const { formikBio } = useBioContext();
  const search: any = useSearchParams()
  const section = search.get("section")



  useEffect(() => {

    let interval = setInterval(() => {

      const element: any = document.getElementById(section);

      if (element) {

        const headerHeight: any = document.getElementById('top') ? document.getElementById('top')?.offsetHeight : ""

        // Calculate the top position considering the sticky header
        const topPosition = element?.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 170);


        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });

        clearInterval(interval)
      }

    }, 500)


  }, [])

  useEffect(() => {
    formikBio?.setValues({
      biography: profile?.biography?.length == 0 ?  initialBioValues: profile?.biography
    })

  }, [profile])

  return (
    <BiographyEditable showHeader={false} profile={profile} formik={formikBio} saveOnFocusOut={true} saveOnDragEnd={true} />
  )
}

export default AddBioComponent