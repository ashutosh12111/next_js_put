import useLoadingError from "@/hooks/useLoadingError";
import useModal from "@/hooks/useModal";
import { showToast } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import DeleteAccountComponent from "./delete-account.component";
import { deleteAccount } from "@/services/settings";
import getTokenClientSide from "@/utils/getTokenClientSide";
import { useAuthContext } from "@/context/auth-context";
import { TOASTR_TYPES } from "@/types";

const DeleteAccountContainer = () => {
  const { toggle, isOpen } = useModal();
  const { loading, startLoading, stopLoading } = useLoadingError();
  const router = useRouter();
  const { clearUserData } = useAuthContext();

  const onConfirm = async () => {
    try {
      startLoading();
      const res: any = await deleteAccount(getTokenClientSide());
      console.log(res, "response delete account");
      clearUserData();
      router.refresh();
      router.push("/");
      showToast(toast, TOASTR_TYPES.SUCCESS, res?.message);
    } catch (err: any) {
      console.log(err, "error");
      showToast(toast, TOASTR_TYPES.ERROR, err?.message);
    } finally {
      toggle();
      stopLoading();
    }
  };

  return (
    <DeleteAccountComponent
      toggle={toggle}
      onConfirm={() => onConfirm()}
      isOpen={isOpen}
      onCancel={() => toggle}
      loading={loading}
    />
  );
};

export default DeleteAccountContainer;
