"use client";
import CustomDatePicker from "@/components/atoms/date-picker/custom-date-picker.component";
import ImageUpload from "@/components/atoms/image-upload";
import SelectCountry from "@/components/atoms/select-country";
import TextInput from "@/components/atoms/text-input";
import { useRegisterContext } from "@/context/register-context";
import React, { useState } from "react";
import dayjs from "dayjs";

const PersonalInfoComponent = () => {
    const [disabled, setDisabled] = useState(false);
    const { formik } = useRegisterContext();
    return (
        <>

            <div
                className="xl:p-24"
                onKeyUp={(e) => {
                    if (e?.keyCode == 13) {
                        let countrySelect = document.querySelector(".ant-select-selector");
                        let dateSelect = document.querySelector(".ant-picker");

                        if (
                            countrySelect?.contains(document.activeElement) ||
                            dateSelect?.contains(document.activeElement)
                        ) {
                            console.log("Focused inside the ck-editor__editable div");
                        } else {
                            formik?.submitForm();
                        }
                    }
                }}
            >
                <div className="flex justify-center items-center mb-24">
                    <ImageUpload
                        name="image"
                        value={formik?.values?.image}
                        className="bg-gray-400"
                        onChange={(img: string) => formik?.setFieldValue("image", img)}
                        onDelete={() => formik?.setFieldValue("image", "")}
                        showError={Boolean(formik?.touched.image)}
                        errorMessage={formik?.errors.image}
                        setDisabled={setDisabled}
                        formik={formik}
                        isOpenModal={true}
                    />

                </div>
                <div className="text-center text-white-para text-12 font-normal leading-16 tracking-0.24 mb-32">
                    Support PNG, JPG or <br />
                    JPEG (max. 10Mb)
                </div>

                <form className="flex flex-col gap-5">
                    <TextInput
                        name="firstName"
                        type="text"
                        label="First name"
                        containerClassName=""
                        value={formik?.values.firstName}
                        showError={Boolean(formik?.touched.firstName)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.firstName}
                        required={true}
                    />
                    <TextInput
                        name="lastName"
                        type="text"
                        label="Last name"
                        containerClassName=""
                        value={formik?.values.lastName}
                        showError={Boolean(formik?.touched.lastName)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.lastName}
                        required={true}
                    />

                    <SelectCountry
                        name="country"
                        label="Country"
                        containerClassName="theme-form-select custom-theme"
                        value={formik?.values.country || ""}
                        showError={Boolean(formik?.touched.country)}
                        errorMessage={formik?.errors.country}
                        onSelect={(code: string) => formik?.setFieldValue("country", code)}
                        required={true}
                    />
                    <TextInput
                        name="city"
                        type="text"
                        label="City of birth"
                        containerClassName=""
                        value={formik?.values.city}
                        showError={Boolean(formik?.touched.city)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.city}
                        required={false}
                    />
                    <CustomDatePicker
                        name="dob"
                        label="Date of birth"
                        type="text"
                        containerClassName="date-of-birth-date-picker"
                        value={formik?.values?.dob}
                        onChange={(date: any, dateString: any) => {
                            formik?.setFieldValue("dob", dayjs(date).format("YYYY-MM-DD"));
                        }}
                        errorMessage={formik?.errors?.dob}
                        showError={formik?.touched?.dob}
                        required={true}
                    />

                    <TextInput
                        name="profession"
                        type="text"
                        label="Profession"
                        containerClassName=""
                        value={formik?.values.profession}
                        showError={Boolean(formik?.touched.profession)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.profession}
                        required={true}
                    />
                    <TextInput
                        name="officeName"
                        type="text"
                        label="Office name"
                        containerClassName=""
                        value={formik?.values.officeName}
                        showError={Boolean(formik?.touched.officeName)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.officeName}
                        required={false}
                    />


                    <TextInput
                        name="height"
                        type="text"
                        label="Height (cm)"  
                        value={formik?.values.height}
                        showError={Boolean(formik?.touched.height)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.height}
                        required={true}
                        className="no-spinners"
                        allowNumbersOnly={true}
                    />
                    <TextInput
                        name="education"
                        type="text"
                        label="Education"
                        containerClassName=""
                        value={formik?.values.education}
                        showError={Boolean(formik?.touched.education)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.education}
                        required={false}
                    />

                    <TextInput
                        name="website"
                        type="text"
                        label="Website"
                        value={formik?.values.website}
                        showError={Boolean(formik?.touched.website)}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        errorMessage={formik?.errors.website}
                        required={false}
                    />
                    <div>
                        <TextInput
                            name="linkedinLink"
                            type="text"
                            label="LinkedIn"
                            value={formik?.values.linkedinLink}
                            showError={Boolean(formik?.touched.linkedinLink)}
                            onChange={formik?.handleChange}
                            onBlur={formik?.handleBlur}
                            errorMessage={formik?.errors.linkedinLink}
                            required={false}
                        />
                        <label className="mt-6 text-placeholder-text-color text-12 font-normal leading-18">
                            Copy the URL link of your social media profile
                        </label>
                    </div>

                    <div>
                        <TextInput
                            name="twitterLink"
                            type="text"
                            label="X (Twitter)"
                            value={formik?.values.twitterLink}
                            showError={Boolean(formik?.touched.twitterLink)}
                            onChange={formik?.handleChange}
                            onBlur={formik?.handleBlur}
                            errorMessage={formik?.errors.twitterLink}
                            required={false}
                        />
                        <label className="mt-6 text-placeholder-text-color text-12 font-normal leading-18">
                            Copy the URL link of your social media profile
                        </label>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PersonalInfoComponent;
