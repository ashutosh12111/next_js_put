
"use client";

import { useFormik } from "formik";
import { createContext, useContext, useState, useEffect } from "react";
import { IContextProps } from "./types";
import { registerSchema } from "@/validations/register-schema";
import { registerUser } from "@/services/auth";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { CONSTANTS, initialBioValues } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "../auth-context";
import { changeOrder } from "@/services/biography";
import getTokenClientSide from "@/utils/getTokenClientSide";
import { showToast } from "@/utils";
import { TOASTR_TYPES } from "@/types";
import { formatWebsiteUrl } from "@/helpers/utils";



const RegisterContext = createContext<IContextProps>({
  currentStep: 1,
  setCurrentStep: (): number => 1,
  formik: null,
  handleOnDragEnd: null,
  handleOnDragStart: null,
  handleDelete: (id: number, formik: any, saveOnFocusOut: boolean, callback: any) => 1,
  handleAddSection: (): number => 1,
  isProfileEdit: false,
  setIsProfileEdit: (): boolean => false,
  deleteId: undefined,
  setDeleteId: (): number => 0
})


export const RegisterContextProvider = ({ children }: any) => {


  const [currentStep, setCurrentStep] = useState(1);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [deleteId, setDeleteId] = useState<number | undefined>()


  const router = useRouter()
  const pathname = usePathname()
  const { getProfile, setToken } = useAuthContext()
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
    biography: initialBioValues,
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    dob: "",
    profession: "",
    officeName: "",
    education: "",
    image: "",
    height: "",
    website: "",
    twitterLink: "",
    linkedinLink: ""
  })

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values: any) => {
      try {


        const res: any = await registerUser({
          email: values?.email,
          password: values?.password,
          first_name: values?.firstName,
          last_name: values?.lastName,
          country: values?.country,
          city: values?.city,
          dob: values?.dob,
          profession: values?.profession,
          office_name: values?.officeName,
          education: values?.education,
          biography: values?.biography?.map((bio: any, i: number) => ({ ...bio, sort_order: i + 1 })),
          image: values?.image,
          website: formatWebsiteUrl(values?.website),
          height: values?.height,
          twitter_link: formatWebsiteUrl(values?.twitterLink),
          linkedin_link: formatWebsiteUrl(values?.linkedinLink),
        });

        setCookie(CONSTANTS.COOKIE_JWT, res?.data?.access_token);
        setCookie(CONSTANTS.COOKIE_UESR_JWT, res?.data?.id);
        setToken(res?.data?.access_token)
        getProfile()
        setIsProfileEdit(false)
        sessionStorage.removeItem('register-formdata');
        router.refresh()
        router.push("/my-profile?type=preview")

        setTimeout(() => {
          showToast(toast, TOASTR_TYPES.SUCCESS, "You have been registered successfully")
        }, 1500)



      } catch (err: any) {
        showToast(toast, TOASTR_TYPES.ERROR, err?.message)
        console.log(err, "error")
      }


    },
  });

  // Load form data from session storage when the component mounts
  useEffect(() => {
    try {
      const storedData = JSON.parse(sessionStorage.getItem('register-formdata') || '{}');
      formik.setValues({ ...initialValues, ...storedData });
    } catch (err) {
      formik.setValues({ ...initialValues });
      console.log(err, "err")
    }

  }, []);

  useEffect(() => {
    // alert(pathname)
    if (!["/register", "/set-up-account"].includes(pathname)) {
      console.log(formik, "formik>>")
      formik.resetForm();
      formik.setValues({
        email: "",
        password: "",
        biography: JSON.parse(JSON.stringify(initialBioValues)),
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        dob: "",
        profession: "",
        officeName: "",
        education: "",
        image: "",
        website: "",
        height: "",
        twitter_link: "",
        linkedin_link: "",
      })

    }
  }, [pathname])



  // Save form data to session storage whenever the form values change
  useEffect(() => {
    sessionStorage.setItem('register-formdata', JSON.stringify(formik.values));
  }, [formik.values]);

  const handleOnDragEnd = (result: any, formik: any, saveOnDragEnd: boolean) => {
    if (!result.destination) return;


    const items = Array.from(formik?.values?.biography);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    formik?.setValues({
      ...formik.values,
      biography: items
    })



    if (saveOnDragEnd) {
      const payload = items?.filter((item: any) => item.id).map((item: any, i: number) => ({
        id: item?.id,
        order: i + 1
      }))

      changeOrder(getTokenClientSide(), { sort_order: payload }).then((res: any) => {

        formik?.setValues({
          ...formik.values,
          biography: items
        })
      }).catch((err: any) => {
        // toast("Something went wrong.")
      })
    }


    formik?.setTouched({})


  };

  const handleOnDragStart = () => {
    const elements: any = document.getElementsByClassName("ck-content");

    for (let i = 0; i < elements.length; i++) {
      elements[i].blur();
    }
  }

  const handleDelete = (id: number, formik: any, saveOnFocusOut: boolean, callback: any) => {

    console.log(formik, "formik to delete>>>")
    const biography = formik?.values.biography.filter((bio: any, i: number) => i !== id);

    formik?.setValues({
      ...formik.values,
      biography: biography
    });

    const updatedBioErrors = formik?.errors?.biography?.filter((bio: any, i: number) => i !== id) || [];

    console.log(updatedBioErrors, "updatedBioErrors>>>")

    formik?.setErrors({
      ...formik.errors,
      biography: [...updatedBioErrors]
    })

    formik.errors = {
      ...formik.errors,
      biography: [...updatedBioErrors]
    }

    if (formik.touched.biography && formik.touched.biography[id]) {
      formik.touched.biography[id].description = false
      formik.touched.biography[id].title = false
    }



    callback && callback()

  }

  const handleAddSection = (formik: any) => {

    formik?.setValues({
      ...formik.values,
      biography: [
        ...formik?.values.biography,
        { title: "", description: "", className: "add-section-min-height" },
      ],
    });

    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

    // Scroll to 158 pixels down from the current position
    // window.scrollTo(0, currentScrollPos + 18);

    setTimeout(() => {
      window.scrollTo({
        top: currentScrollPos + 178,
        behavior: 'smooth',
      });
    }, 200)


  }


  return (<RegisterContext.Provider value={{ currentStep, setCurrentStep, formik, handleOnDragEnd, handleDelete, handleAddSection, handleOnDragStart, isProfileEdit, setIsProfileEdit, deleteId, setDeleteId }} >
    {children}
  </RegisterContext.Provider>)
}

export const useRegisterContext = () => useContext(RegisterContext)