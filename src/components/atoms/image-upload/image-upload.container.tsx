import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import ImageUploadComponent from './image-upload.component'
import { IImageUpload } from './image-upload.types'
import useLoadingError from '@/hooks/useLoadingError'
import { showToast } from '@/utils'
import { toast } from 'react-toastify'
import { TOASTR_TYPES } from '@/types'
import CustomModal from '@/components/molecules/custom-modal'
import useModal from '@/hooks/useModal'
import CropModalEasy from '../crop-modal-easy'
import { clearFileInput } from '../crop-modal-easy/utils'

const ImageUploadContainer = (props: IImageUpload) => {
  const { toggle, isOpen, closeModal, openModal } = useModal();
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const setCroppedImageUrlCallback = useCallback(
    (url: any) => {
      setCroppedImageUrl(url);
    },
    [croppedImageUrl]
  );


  const [imgSrc, setImgSrc] = useState("")
  const [imageName, setImageName] = useState("")
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const { loading, error } = useLoadingError()
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {

    const selectedFile: any = e?.target.files && e.target.files[0];
    const fileSizeInMB = selectedFile?.size / (1024 * 1024);   //     if (selectedFile) {
    const allowedFormats = ['image/jpeg', 'image/png', 'application/jpg'];
    if (!allowedFormats.includes(selectedFile.type)) {

      showToast(
        toast,
        TOASTR_TYPES.ERROR,
        "This file format is not allowed."
      );

      return
    }
    if (fileSizeInMB > 10) {
      showToast(
        toast,
        TOASTR_TYPES.ERROR,
        "The image field must not be greater than 10 MB"
      );
      return
    }

    if (e.target.files && e.target.files.length > 0) {
      setCrop({ x: 0, y: 0, width: 0, height: 0 })
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
      openModal();
    }
  }


  const handleDelete = () => {

    if (setImgSrc) {
      setImgSrc("");
      setImageName("")
    }
    props.onDelete && props.onDelete()
    let input: any = document.getElementById("input-file")
    if (input) {
      input.value = ""

    }

  }

  useEffect(() => {
    if (props.image) {
      setImgSrc(props.image)
      setImageName(props.image)
    } else {
      setImgSrc("")
      setImageName("")
    }
  }, [props.image])


  useLayoutEffect(() => {
    if (!isOpen && !imageName) {
      handleDelete()
    }
  }, [isOpen])

  useEffect(() => {
    if (!props?.isOpenModal) {
      handleDelete()
    } else {
      setImgSrc(props.image)
      setImageName(props.image)
    }
  }, [props?.isOpenModal])


  useEffect(() => {

    if(!isOpen){
      clearFileInput()
    }

  },[isOpen])

  return (
    <>
      {props?.isOpenModal && <>   <CustomModal isOpen={isOpen} toggle={toggle} innerClass="md:w-[550px]">

        <CropModalEasy
          toggle={toggle}
          isOpen={isOpen}
          src={imgSrc}
          setCroppedImageUrl={setCroppedImageUrlCallback}
          setImage={setImgSrc}
          crop={crop}
          setImageName={setImageName}
          setCrop={setCrop}
          onChange={props.onChange}
        />
      </CustomModal>
        <ImageUploadComponent {...props} image={imageName} handleDelete={handleDelete} handleChange={onSelectFile} loading={loading} uploadError={error || ""} /></>}
    </>
  )
}

export default ImageUploadContainer