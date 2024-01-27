import CustomButton from "@/components/atoms/button";
import ConfirmDelete from "@/components/organisms/profile/confirm-delete";
import { IConfirmDeleteModal } from "@/components/organisms/profile/confirm-delete/confirm-delete.component.types";
import React from "react";

const DeleteAccountComponent = (props: IConfirmDeleteModal) => {
  return (
    <>
      <div className="bg-gray-400 rounded-xl p-24 mt-24">
        <h2 className="mb-8 text-white-heading text-20 font-semibold leading-32">
          Delete account
        </h2>
        <p className="mb-24 text-white-para text-16 font-normal leading-24 tracking-0.32">
          Permanently delete your account and all of your content.
        </p>

        <CustomButton
          title="Delete this account"
          variant="custom"
          className="bg-[#E75851] rounded-xl py-12 px-24 text-white text-16 font-medium leading-24 w-full sm:w-auto"
          onClick={props.toggle}
        />
      </div>
      <ConfirmDelete
        title={"Are you sure you want to delete your account?"}
        message={"The account you delete cannot be accessed again"}
        {...props}
      />
    </>
  );
};

export default DeleteAccountComponent;
