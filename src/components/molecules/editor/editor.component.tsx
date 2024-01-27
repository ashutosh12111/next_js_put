"use client"

import React, { useState, useLayoutEffect } from 'react'
import { IEditor } from './editor.types';
import ErrorLabel from "@/components/atoms/error-label";
import { getBiographyError } from "@/context/register-context/types";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor as CKEditorComponent } from "@ckeditor/ckeditor5-react";


const EditorComponent = ({id, bio, uploadPlugin, disabled = false, formik}: IEditor) => {

  const [editor, setEditor] = useState(formik?.values?.biography ? formik?.values?.biography[id].description: "");

  useLayoutEffect(() => {

    setEditor(formik?.values?.biography ? formik?.values?.biography[id].description : "")

  },[formik?.values?.biography])

 const handleChange =  (event:any, editor:any) => {
    console.log(editor.getData())
    setEditor(editor.getData());

    const name = "description"
    if(formik?.values.biography){
      const biography  = [...formik?.values.biography];
      biography[id][name] = editor.getData();
      
      formik?.setValues({
        ...formik.values,
        biography: biography,
      });
    }
 
 }

  const handleBlur = (e:any) => {
    formik?.setFieldTouched(`biography[${id}].${"description"}`, true);
  };


    return (
        <>
            <div className={bio?.className}>
             <CKEditorComponent 
              config={{
                    extraPlugins:  [uploadPlugin],
                    placeholder: "Add a body...",
                    
                    toolbar: {
                      items: [
                        'bold',
                        'italic',
                        'link',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'outdent',
                        'indent',
                        '|',
                        'undo',
                        'redo',
                        'imageUpload'
                      ],
                      
                    }
              }}
              editor={ClassicEditor} 
              onChange = {handleChange}
              data={editor}
              onBlur={handleBlur}
              disabled={disabled}
              onReady={() => {

              }}
             />
             </div>
             
           {formik?.touched?.biography && formik?.touched?.biography[id]?.description && <ErrorLabel message={getBiographyError(formik,id,"description")} className='px-10 bio-error mb-6'/>}
        </>
    )
}

export default EditorComponent