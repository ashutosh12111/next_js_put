import React from 'react'
import { Icon } from '../icons'
import { IImageUploadComponent } from './image-upload.types'
import ErrorLabel from '../error-label'
import ButtonLoader from '../button-loader/button-loader.component'

const ImageUploadComponent = ({ className = "", handleChange, handleDelete, image, showError, errorMessage, loading, uploadError }: IImageUploadComponent) => {
  return (
    <div className='flex flex-col items-center'>
      <div className={`w-[143px] h-[143px] rounded-sm flex justify-center items-center cursor-pointer relative group  ${className}`}>
        {loading ? <ButtonLoader loading={loading} /> :
          <>
            {!image && <Icon.IcUploadImage />}
            {image && <img src={image} className='h-full w-full object-cover'></img>}
            <div className="absolute hidden group-hover:block w-full h-full bg-upload-image-overlay z-10 transition duration-75 rounded-sm">
              <div className="flex items-center justify-center h-full gap-6">
                <input id='input-file' type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10" onChange={handleChange}
                  accept="image/jpeg, image/png, image/jpg"
                />
                {image && <button className="bg-white-heading rounded-full p-8 flex items-center justify-center z-20" onClick={handleDelete}><Icon.IcDarkBin /></button>}
                {image && <button className="bg-white-heading rounded-full p-8 flex items-center justify-center z-20" onClick={() => {
                  document.getElementById("input-file")?.click()
                }}><Icon.IcDarkUpload /></button>}
              </div>
            </div>
          </>
        }
      </div>
      {(showError || uploadError) && <ErrorLabel message={uploadError || errorMessage} />}
    </div>
  )
}

export default ImageUploadComponent