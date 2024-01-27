import { ISingleSectionData } from "@/components/organisms/biography/biography-editable/single-section/single-section.types"

export interface IEditor extends ISingleSectionData {
    uploadPlugin?: any;
    disabled?: boolean
}
export interface IEditorContainer extends ISingleSectionData {
    uploadPlugin?: any;
    disabled?: boolean
}