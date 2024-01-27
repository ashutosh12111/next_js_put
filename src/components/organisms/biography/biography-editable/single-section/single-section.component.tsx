"use client";
import React, { useRef} from "react";
import HeadingEditable from "@/components/atoms/heading-editable";
import Editor from "@/components/molecules/editor";
import DeleteButton from "../delete-button";
import { ISingleSectionData } from "./single-section.types";

const SingleSection = ({
  bio,
  id,
  formik,
  saveOnFocusOut,
  toggle,
  handleBlur,
}: ISingleSectionData) => {

  const divRef: any = useRef();
  

  return (
    <div className="pb-30">
    <div
      className="relative bio-section group border border-border-color hover:border-blue-link editor-wrapper rounded-xl"
      onBlur={(e) => saveOnFocusOut && handleBlur(e, id,divRef)}
      ref={divRef}
    >
      {formik?.values?.biography && formik?.values?.biography.length > 1 && !formik?.values?.biography[id]?.disabled && (
        <DeleteButton
          id={id}
          formik={formik}
          saveOnFocusOut={saveOnFocusOut}
          toggle={toggle}
        />
      )}
      <HeadingEditable
        id={id}
        bio={bio}
        disabled={false}
        formik={formik}
      />
      <Editor
        id={id}
        bio={bio}
        disabled={false}
        formik={formik}
      />
    </div>
    </div>
  );
};

export default SingleSection;
