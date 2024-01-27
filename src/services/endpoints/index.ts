export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: "/api/sign-in",
    REGISTER: "/api/register-encyclopedia",
    LOGOUT: "/api/encyclopedia/logout",
    MY_PROFILE: "/api/encyclopedia/profile-information",
    UPDATE_PROFILE: "/api/encyclopedia/update-profile-e",
    CHECK_EMAIL_EXISTS: "/api/email-already",
    FORGOT_PASSWORD: "/api/forgot-password",
    GET_MY_PROFILE: "/api/encyclopedia/profile-information",
    VERIFY_OTP: "/api/forgot-password-verify-code",
    RESET_PASSWORD: "/api/reset-password",
    VERIFY_RECAPTCHA: "/api/recaptcha",
    UPLOAD_FILE: "/api/image-upload",
  },
  HOMEPAGE: {
    MEMBERS: "/api/encyclopedia/members",
    FEATURE_MEMBERS: "/api/encyclopedia/feature-members",
    GET_PUBLISHEDUSER_SLUGS: "/api/get-published-user-slugs",
  },
  SEARCH: {
    SEARCH_MEMBERS: "/api/encyclopedia/",
    SEARCH_APPEARED: "/api/search-appeared",
  },
  BIOGRAPHY: {
    CHANGE_ORDER: "/api/encyclopedia/drag-drop-biography",
    PUBLISH_PROFILE: "/api/encyclopedia/publish-profile",
    PUBLISH_BIO: "/api/encyclopedia/publish-biography",
    DRAFT_BIOGRAPHY: "/api/encyclopedia/draft-biography",
    DELETE_SECTION: "/api/encyclopedia/delete-publish-biography",
    UPDATE_UESR_BIO: "/api/encyclopedia/update-user-biography",
  },
  PAYMENT: {
    PAYMENT_SUCCESS: "/api/stripe/success",
  },
  MEMBERS: {
    MEMBER_LIST: "/api/encyclopedia/all-members",
    VIEW_MEMBER: "/api/encyclopedia/view-profile",
  },
  SETTINGS: {
    EDIT_EMAIL: "/api/encyclopedia/edit-email",
    EMAIL_VERIFY_CODE: "/api/encyclopedia/email-verify-code",
    CHANGE_PASSWORD: "/api/encyclopedia/change-password",
    DELETE_ACCOUNT: "/api/encyclopedia/delete-account",
  },
  FEEDBACK: {
    SUBMIT_FEEDBACK: "/api/create-feedback",
  },
  NOTIFICATION: {
    LISTING: "/api/list-notification",
    CLEAR_NOTIFICATION: "/api/markas-clear-notification",
    READ_NOTIFICATIONS: "/api/read-notification",
  },
  SHARE: {
    SHARE_PROFILE: "/api/encyclopedia/share-profile",
    PROFILE_VISIT: "/api/encyclopedia/profile-visit",
    PROFILE_IMPRESSION: "/api/encyclopedia/profile-impression",
  },
};
