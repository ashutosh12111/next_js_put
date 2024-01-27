import { CONSTANTS } from "@/constants";
import { searchAppeared } from "@/services/search";
import { profileImpression, profileVisit } from "@/services/share";
import axios from "axios";
import cheerio from "cheerio";

export const extractTextFromHTML = (html: string, wordLimit?: number) => {
  const $ = cheerio.load(html);
  let text = $.text();

  if (wordLimit !== undefined) {
    text = text.split(/\s+/).slice(0, wordLimit).join(" ");
  }

  return text;
};

export const scrollToBioError = () => {
  setTimeout(() => {
    const errorField =
      document.getElementsByClassName("bio-error") &&
      document.getElementsByClassName("bio-error")[0];

    if (errorField) {
      errorField.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 100);
};

export const getUserProfileStatus = (
  isPublish: any,
  adminPublishHidden: any
) => {
  let isPublishUser = "";

  if (adminPublishHidden) {
    if (adminPublishHidden === CONSTANTS.USER_PROFILE_STATUS.PUBLISHED) {
      isPublishUser = "1";
    } else {
      isPublishUser = "0";
    }
  } else {
    isPublishUser = isPublish?.toString();
  }

  return isPublishUser;
};

export const capitalizeFirstLetter = (inputString: string): string => {
  if (inputString) {
    return inputString?.charAt(0)?.toUpperCase() + inputString?.slice(1);
  }
  return inputString;
};

export const getFullUrl = () => {
  let protocol = window.location.protocol;

  // Get the hostname (e.g., "www.example.com")
  let hostname = window.location.hostname;

  // Create the full URL by concatenating protocol and hostname
  let fullURL = protocol + "//" + hostname;

  return fullURL;
};

export const makeProfileShareUrl = (user: any) => {
  return window?.location.href.includes("/my-profile")
    ? `${getFullUrl()}/members/${user?.slug}`
    : window?.location?.href;
};

export const getNotificationRedirectLink = (notification: any) => {
  return notification?.title == "Check out the most famous biographies ✨"
    ? "/"
    : "/my-profile";
};

export const handleProfileImpression = (slug: any, user: any) => {
  console.log(slug, "user.slug");
  console.log(user?.slug, "user.slug");
  if (slug && slug != user?.slug) {
    profileImpression({
      from_user: user?.id || null,
      to_user: slug,
    });
  }
};

export const handleProfileVisit = async (slug: any, user: any) => {
  const { country_name, country_code } = await getUserCountry();

  if (slug && slug != user?.slug) {
    profileVisit({
      from_user: user?.id || null,
      to_user: slug,
      country_name: country_name || "Unknown",
      country_code: country_code || "Unknown",
    });
  }
};
export const handleSearcAppeared = (id: any, user: any) => {
  if (id != user?.id) {
    searchAppeared({ id });
  }
};

export const formatNumber = (number: any) => {
  if (number >= 100) {
    return "99+";
  } else {
    return number.toString();
  }
};
export const formatWebsiteUrl = (url: any) => {
  // Check if the URL starts with "https://" or "http://"
  // Trim the URL and check if it is empty or whitespace-only
  const trimmedUrl = url?.trim();
  if (!trimmedUrl) {
    // If empty or whitespace-only, return an empty string
    return "";
  }

  if (!trimmedUrl.startsWith("https://") && !url.startsWith("http://")) {
    // If not, prepend "https://"
    return `https://${url}`;
  }

  // If the URL already starts with "https://" or "http://", return as is
  return url;
};
export const getUserCountry = async () => {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching user country:", error);
    return null;
  }
};

export const getProtocol = () => {
  if (process.env.NODE_ENV == "production") {
    return "https";
  } else {
    return "http";
  }
};
