export interface ISingleSectionData {
   id: number;
   bio: {title: string; description: string; className?:string};
   disabled?: boolean;
   formik: any;
   saveOnFocusOut?: boolean;
   saveOnDragEnd?: boolean;
   toggle?: any;
   handleBlur?: any;
   divRef?: any
} 