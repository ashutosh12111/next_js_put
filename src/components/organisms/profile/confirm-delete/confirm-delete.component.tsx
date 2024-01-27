import React from "react";
import { IConfirmDeleteModal } from "./confirm-delete.component.types";
import CustomModal from "@/components/molecules/custom-modal";
import CustomButton from "@/components/atoms/button";
import Image from "next/image";
import { Icon } from "@/components/atoms/icons";

const ConfirmDeleteComponent = ({
  title,
  message,
  children,
  isOpen,
  onConfirm,
  onCancel,
  openModal,
  toggle,
  loading,
}: IConfirmDeleteModal) => {
  return (
    <CustomModal
      isOpen={isOpen}
      openModal={openModal}
      toggle={toggle}
      innerClass="sm:w-[320px]"
    >
      <div className="bg-gray-400 border border-border-color rounded-[30px] relative w-full flex flex-col">
        <button
          className="absolute top-[16px] right-[16px]"
          onClick={toggle}
        >
          <Icon.IcModalClose />
        </button>
        <div className="pt-32 px-16 pb-16">
          <Image
            className="mx-auto mb-20"
            src="/assets/images/delete-pop-up-img.png"
            width={158}
            height={173}
            alt="Brand Logo"
            title="Brand Logo"
          />
          <h3 className="mb-8 text-white-heading text-18 font-medium leading-28 text-center">
            {title}
          </h3>
          <p className="text-white-para text-14 font-normal leading-20 text-center">
            {message}
          </p>
        </div>
        <div className="pt-16 px-16 pb-20">
          <div className="flex flex-col gap-3">
            <CustomButton
              title="Delete"
              variant="primary"
              onClick={onConfirm}
              loading={loading}
            />
            <CustomButton
              title="Cancel"
              variant="secondary"
              onClick={toggle}
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ConfirmDeleteComponent;
