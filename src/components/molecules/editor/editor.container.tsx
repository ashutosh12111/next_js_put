"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { UploadAdapter, FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";
import { uploadFile } from "@/services/auth";
const EditorComponent = dynamic(() => import('./editor.component'), { ssr: false })

import "./editor.css"
import { IEditor } from './editor.types';


const EditorContainer = (props: IEditor) => {

    function uploadAdapter(loader: FileLoader): UploadAdapter {
        return {
          upload: () => {
            return new Promise(async (resolve, reject) => {
              try {
                const file = await loader.file;
                const response:any = await uploadFile({image: file})
                resolve({
                  default: response?.data?.image_name
                });
              } catch (error) {
              }
            });
          },
          abort: () => {}
        };
      }

    function uploadPlugin(editor: any) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader:any) => {
          return uploadAdapter(loader);
        };
    }

      
    return (
        <EditorComponent {...props} uploadPlugin={uploadPlugin}/>
    )
}

export default EditorContainer