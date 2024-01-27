import React, { useState } from "react";
import { IPersonalDetailModalModal } from "./personal-detail-modal.types";
import CustomModal from "@/components/molecules/custom-modal";
import CustomButton from "@/components/atoms/button";
import TextInput from "@/components/atoms/text-input";
import SelectCountry from "@/components/atoms/select-country";
import CustomDatePicker from "@/components/atoms/date-picker/custom-date-picker.component";
import ImageUpload from "@/components/atoms/image-upload";
import dayjs from "dayjs";

const PersonalDetailModalComponent = ({
  children,
  isOpen,
  onConfirm,
  onCancel,
  openModal,
  toggle,
  formik,
}: IPersonalDetailModalModal) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <CustomModal
      isOpen={isOpen}
      openModal={openModal}
      toggle={toggle}
      innerClass="xl:w-[903px]"
    >
      <div
        className="modal-content bg-gray-400 rounded-xl flex flex-col w-full"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            let countrySelect = document.querySelector(".ant-select-selector");
            let dateSelect = document.querySelector(".ant-picker");

            if (
              countrySelect?.contains(document.activeElement) ||
              dateSelect?.contains(document.activeElement)
            ) {
              console.log("Focused inside the ck-editor__editable div");
            } else {
              !disabled && formik?.handleSubmit();
            }
          }
        }}
      >
        <div className="p-24 border-b border-border-color text-white-heading text-16 font-semibold leading-24 rounded-t-xl">
          Edit
        </div>
        <div className="xl:grid grid-cols-4">
          <div className="col-span-1 p-32 border border-t-0 xl:border-r-0 border-b-0 border-border-color">
            <ImageUpload
              name="image"
              value={formik?.values?.image}
              image={formik?.values?.image}
              className="bg-gray-300 mx-auto mb-39"
              onChange={(img: string) => {
                formik?.setFieldValue("image", img);
              }}
              onDelete={() => formik?.setFieldValue("image", "")}
              showError={Boolean(formik?.touched.image)}
              errorMessage={formik?.errors.image}
              setDisabled={setDisabled}
              disabled={disabled}
              isOpenModal={isOpen}
            />

            <div className="text-center text-white-para text-12 font-normal leading-16 tracking-0.24">
              Support PNG, JPG or <br />
              JPEG (max. 10Mb)
            </div>
          </div>
          <div className="col-span-3 p-24 border xl:border-t-0 border-b-0 border-border-color  max-h-[390px] overflow-y-auto modal-scroll">
            <form className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <TextInput
                name="firstName"
                type="text"
                label="First name"
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
                containerClassName="custom-theme theme-form-select"
                showError={Boolean(formik?.touched.country)}
                errorMessage={formik?.errors.country}
                onSelect={(code: string) => {
                  console.log("--code", code);
                  formik?.setFieldValue("country", code);
                  document.getElementById("rfs-btn")?.click();
                }}
                value={formik?.values?.country}
                required={true}
              />

              <TextInput
                name="profession"
                type="text"
                label="Profession"
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
                value={formik?.values.education}
                showError={Boolean(formik?.touched.education)}
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                errorMessage={formik?.errors.education}
                required={false}
              />
              <CustomDatePicker
                name="dob"
                label="Date of birth"
                type="text"
                value={formik?.values?.dob}
                onChange={(date: any, dateString: any) => {
                  // alert(dateString)
                  formik?.setFieldValue(
                    "dob",
                    dayjs(date).format("YYYY-MM-DD")
                  );
                }}
                errorMessage={formik?.errors?.dob}
                showError={formik?.touched?.dob}
                required={true}
              />

              <TextInput
                name="city"
                type="text"
                label="City of birth"
                value={formik?.values.city}
                showError={Boolean(formik?.touched.city)}
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                errorMessage={formik?.errors.city}
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
            </form>
          </div>
        </div>
        <div className="p-24 flex flex-row justify-end gap-3 border-t border-b border-border-color rounded-b-xl">
          <CustomButton
            title="Save"
            variant="primary"
            className="w-full sm:w-auto"
            loading={formik?.isValid && formik?.isSubmitting}
            onClick={() => {
              !disabled && formik?.handleSubmit();
            }}
            disabled={disabled}
          />
          <CustomButton
            title="Cancel"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => {
              toggle();
            }}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default PersonalDetailModalComponent;
