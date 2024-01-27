"use client";
import React, { useEffect } from "react";
import SingleSection from "../single-section";
import { useRegisterContext } from "@/context/register-context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IBioSections } from "./bio-sections.types";
import ConfirmDelete from "@/components/organisms/profile/confirm-delete";
import useModal from "@/hooks/useModal";
import useLoadingError from "@/hooks/useLoadingError";
import { showToast } from "@/utils";
import { TOASTR_TYPES } from "@/types";
import { deleteSection } from "@/services/biography";
import getTokenClientSide from "@/utils/getTokenClientSide";
import { toast } from "react-toastify";
import { draftBiography } from "@/services/biography";
import { initialBioTitles } from "@/constants";

const BioSectionsComponent = ({
  formik,
  saveOnFocusOut,
  saveOnDragEnd,
}: IBioSections) => {
  const { handleOnDragEnd, handleOnDragStart } =
    useRegisterContext();

  const { handleDelete, deleteId } = useRegisterContext();
  const { toggle, isOpen } = useModal();
  const { loading, startLoading, stopLoading } = useLoadingError();
  const { loading: loadingSaveBio, startLoading: startLoadingSaveBio, stopLoading: stopLoadingSaveBio } = useLoadingError();


  // to disable the deletion of predefined sections
  useEffect(() => {

    // Create a map to track encountered titles and their first occurrence index
    let firstOccurrenceMap = new Map();

    // Iterate through the data array
    if(formik?.values?.biography){
     formik?.values?.biography.forEach((item:any, index:any) => {
       // Check if the title is in the titles array and has not been encountered before
       if (initialBioTitles.includes(item.title) && !firstOccurrenceMap.has(item.title)) {
         // Add the disabled property to the object
         item.disabled = true;
         // Add the title and its first occurrence index to the map
         firstOccurrenceMap.set(item.title, index);
       }else{
        item.disabled = false
       }
     });
    }



},[formik?.values?.biography])



  const onConfirm = (id: any) => {
    handleDelete(id, formik, Boolean(saveOnFocusOut), () => {
      if (
        saveOnFocusOut &&
        formik?.values?.biography &&
        formik?.values?.biography[id].id
      ) {
        startLoading();
        deleteSection(getTokenClientSide(), {
          id: formik?.values?.biography[id].id,
        })
          .then((res: any) => {
            showToast(toast, TOASTR_TYPES.SUCCESS, res?.message);
          })
          .catch((err: any) => {
            console.log(err, "error comes here");
          })
          .finally(() => {
            stopLoading();
            toggle();
          });
      } else {
        toggle();
        document.body.style.overflow = "auto";
      }
    });
  };

  const handleBlur = (e: React.FocusEvent, id: number, divRef: any) => {
    
    if (!divRef?.current?.contains(e.relatedTarget) && !loadingSaveBio) {

      console.log(divRef,"divRef")

      formik?.validateForm();
      const data: any = formik?.values?.biography
        ? formik?.values?.biography[id]
        : {};
  
      if (data?.title && data?.description && !loadingSaveBio) {
        startLoadingSaveBio();
        draftBiography(getTokenClientSide(), {
          id: formik?.values?.biography
            ? formik?.values?.biography[id]?.id
            : undefined,
          title: data?.title,
          description: data?.description,
          sort_order: id + 1,
        })
          .then((res: any) => {
            if (formik?.values.biography) {
              formik.setFieldValue(`biography[${id}]`, {
                ...(res?.data || {}),
                ...formik.values.biography[id],
                id: res?.data?.id,
              });
            }
          })
          .catch((err: any) => {
            toast(err?.response?.message);
          })
          .finally(() => {
            stopLoadingSaveBio();
          });
      }

    }

  };

  return (
    <div className="">
      <DragDropContext
        onDragEnd={(result) => handleOnDragEnd(result, formik, saveOnDragEnd)}
        onDragStart={handleOnDragStart}
      >
        <Droppable
          droppableId="droppable"
          mode="standard"
          isDropDisabled={false}
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {formik?.values?.biography &&
                formik?.values?.biography.map((bio: any, index: number) => {
                  return (
                    <div
                      id={`section-${index}`}
                      key={"item-key-" + index.toString()}
                    >
                      <Draggable
                        key={"item-" + index.toString()}
                        draggableId={"item-" + index.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            id={`section_editor-${index}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="test234"
                          >
                            <SingleSection
                              bio={bio}
                              id={index}
                              formik={formik}
                              saveOnFocusOut={saveOnFocusOut}
                              saveOnDragEnd={saveOnDragEnd}
                              toggle={toggle}
                              handleBlur={handleBlur}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ConfirmDelete
        title={"Are you sure you want to delete this section?"}
        message={"The data you delete cannot be accessed again"}
        toggle={toggle}
        onConfirm={() => onConfirm(deleteId)}
        isOpen={isOpen}
        onCancel={() => toggle}
        loading={loading}
      />
    </div>
  );
};

export default BioSectionsComponent;
