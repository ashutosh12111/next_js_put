"use client";

import React from "react";
import Header from "./header";
import AddSectionButton from "./add-section";
import BioSections from "./bio-sections";


const BiographyEditableComponent = ({ className, showHeader = false, formik, saveOnFocusOut = false, saveOnDragEnd = false }: any) => {



  return (
    <>
      <div className="default-section-template h-full">
        {showHeader && <Header />}
        <div className={className}>
          <BioSections formik={formik} saveOnFocusOut={saveOnFocusOut} saveOnDragEnd={saveOnDragEnd} />
          {/* add more section button */}
          <div className="lg:mb-30">
          <AddSectionButton formik={formik} />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default BiographyEditableComponent;
