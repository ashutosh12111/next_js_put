import React from 'react'
import TextInput from '../text-input'
import { ISingleSectionData } from '@/components/organisms/biography/biography-editable/single-section/single-section.types'
import { IBiography, getBiographyError } from '@/context/register-context/types'
import { Icon } from '../icons'

const HeadingEditableComponent = ({ id, bio, disabled, formik }: ISingleSectionData) => {


  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {

    console.log(event.target.value, "value>>>>>>>>")
    console.log(event.target.name, "value>>>>>>>>")
    const { name, value } = event.target;
    if (formik?.values?.biography) {
      const biography: IBiography[] = [...formik?.values?.biography];
      biography[index]["title"] = value;

      console.log(biography, "biography>>>")


      formik?.setValues({
        ...formik.values,
        biography: biography,
      });
    }

  };

  const handleBlur = (index: number, name: string, callback?: () => void) => {
    formik?.setFieldTouched(`biography[${index}].${name}`, true);
  };

  return (
    <div className="pl-30 pr-24 py-10">
      {disabled ? <div className='flex gap-1 items-center relative'>

        <h2 className="text-white-heading text-18 font-semibold leading-28">{bio?.title}</h2>
        <span className='cursor-pointer' ><Icon.IcPencil /></span>
      </div> : <> <span className="cursor-grab absolute top-[-2px] left-[-27px] xl:left-[-23px] w-[50px] h-[50px] flex justify-end items-center"><Icon.IcDrag /></span><TextInput
        name="title"
        type="text"
        variant='transparent'
        placeholder='Add a heading'
        value={formik?.values?.biography && formik?.values?.biography[id]?.title || ""}
        onChange={(e: any) => handleChange(e, id)}
        onBlur={(e: any) => {
          handleBlur(id, e?.target.name)
        }}
        errorMessage={getBiographyError(formik, id, "title")}
        showError={formik?.touched?.biography ? formik?.touched?.biography[id]?.title : false}
        disabled={disabled || formik?.values?.biography[id]?.disabled}
        errorLabelClass="bio-error"
      /></>}
    </div>
  )
}

export default HeadingEditableComponent