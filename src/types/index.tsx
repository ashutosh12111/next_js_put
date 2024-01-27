export interface IFeatureMember {
  id: number;
  slug: string;
  name: string;
  profession: string | null;
  country: string;
  image: string; // Assuming image is a string representing the URL of the image
  description: string;
}

export interface ICustomDropdownState {
  anchorEl: HTMLElement | null;
  handleOpenDropdown: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseDropdown: () => void;
  open: boolean;
}

export interface ICustomTabs {
  activeTab: number;
  handleTabsChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export enum TOASTR_TYPES {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
