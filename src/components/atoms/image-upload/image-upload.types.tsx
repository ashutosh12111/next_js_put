export interface IImageUpload {
   id?: string;
   name?: string;
   className: string;
   value?: string;
   errorMessage?: string;
   errorClassName?: string;
   showError?: boolean;
   onDelete?: () => void;
   onChange?: (img: string) => void;
   setImage?: (str: any) => void;
   onFocus?: React.FocusEventHandler;
   onBlur?: React.FocusEventHandler;
   autoFocus?: boolean;
   setDisabled: any;
   disabled?: boolean,
   setSrc?: any;
   setCropModal?: any;
   openModal?: any
   image?: any
   formik?: any
   isOpenModal?: any
   // setImage?:any
}

export interface IImageUploadComponent extends IImageUpload {
   image: string;
   handleChange: any,
   handleDelete: () => void;
   loading: boolean;
   uploadError: string
}