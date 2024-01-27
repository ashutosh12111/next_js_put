export const CONSTANTS = {
  COOKIE_JWT: "put-it-on-jwt",
  COOKIE_UESR_JWT: "put-it-on-user-jwt",
  LOGIN_TYPE: {
    ADMIN: 1,
    WEBSITE: 2,
  },
  USER_PROFILE_STATUS: {
    PUBLISHED: "Published",
    HIDDEN: "Hidden",
  },
};

export const initialBioValues = [
  {
    title: "Introduction",
    description: "",
    className: "add-section-min-height",
    disabled: true,
  },
  {
    title: "Early life and education",
    description: "",
    className: "add-section-min-height",
    disabled: true,
  },
  {
    title: "Career trajectory",
    description: "",
    className: "add-section-min-height",
    disabled: true,
  },
  {
    title: "Legacy and future",
    description: "",
    className: "add-section-min-height",
    disabled: true,
  },
  {
    title: "References",
    description: "",
    className: "add-section-min-height",
    disabled: true,
  },
];

export const validations = {
  EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/,
  URL: /^(https?:\/\/)?([A-Za-z0-9-]+\.){1,}[A-Za-z]{2,}(:[0-9]+)?(\/[^\s]*)?$/,
};

export const initialBioTitles = [
  "Introduction",
  "Early life and education",
  "Career trajectory",
  "Legacy and future",
  "References",
];
