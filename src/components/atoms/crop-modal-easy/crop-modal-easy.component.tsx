"use client";
import React, { useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import useLoadingError from "@/hooks/useLoadingError";
import { Icon } from "../icons";
import CustomButton from "../button";
import { uploadFile } from "@/services/auth";
import { getCroppedImg } from "./utils";
import { showToast } from "@/utils";
import { toast } from "react-toastify";
import { TOASTR_TYPES } from "@/types";
import { Slider } from "antd";
import imageCompression from "browser-image-compression";
import "./crop-modal-easy.css";

const CropModalEasyComponent = (props: any) => {
  const { crop, setCrop, setImageName } = props;
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(2);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const { loading, startLoading, stopLoading } = useLoadingError();

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      startLoading();
      const croppedImage: any = await getCroppedImg(
        props?.src,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);

      const res = await fetch(croppedImage);
      const blob = await res.blob();

      // Get the size of the blob in bytes
      const sizeInBytes = blob.size;

      // Convert bytes to megabytes
      const sizeInMegabytes = sizeInBytes / (1024 * 1024);

      console.log(`Blob size: ${sizeInMegabytes.toFixed(2)} MB`);

      const options = {
        maxSizeMB: 0.6,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      const uniqueFileName = `croppedImage_${Date.now()}.jpg`;
      const file = new File([blob], uniqueFileName, { type: blob.type });

      // For browser image compression
      const compressedFile = await imageCompression(file, options);

      const response: any = await uploadFile({ image: compressedFile });

      const imageName = response?.data?.image_name;
      setImageName(imageName);
      props?.setImage(imageName);
      props.onChange && props.onChange(imageName);
      setCrop({ x: 0, y: 0 });

      props.toggle();
    } catch (err: any) {
      showToast(toast, TOASTR_TYPES.ERROR, err?.message);
      console.error(err);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    setZoom(2);
  }, [props.src]);

  return (
    <div className="bg-gray-400 border border-border-color rounded-xl w-full">
      <div className="p-24  border-b border-border-color flex items-center justify-between">
        <h3 className="text-white-heading text-16 font-semibold leading-24">
          Crop Image
        </h3>
        <button
          className=""
          onClick={props.toggle}
        >
          <Icon.IcModalClose />
        </button>
      </div>
      <div className="relative w-full h-[400px]">
        <Cropper
          image={props?.src}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          cropSize={{ height: 300, width: 300 }}
        />
      </div>
      <div className="p-24 flex items-center justify-between">
        <label className="text-white-heading text-14 font-medium leading-20">
          Zoom
        </label>
        <Slider
          defaultValue={30}
          value={zoom}
          onChange={(value: any) => setZoom(value)}
          min={1}
          max={3}
          step={0.1}
          className="w-[200px]"
          tooltip={{ formatter: null }}
        />
        <CustomButton
          title="Crop"
          onClick={showCroppedImage}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default CropModalEasyComponent;
