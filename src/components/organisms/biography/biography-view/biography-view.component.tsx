"use client";
import React, { useEffect, useRef, useState } from "react";
import Contents from "../../profile/contents";
import { Icon } from "@/components/atoms/icons";
import PersonalDetail from "../../profile/personal-detail";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils";
import { toast } from "react-toastify";
import { TOASTR_TYPES } from "@/types";
import { paymentSuccess } from "@/services/payment";
import { useAuthContext } from "@/context/auth-context";
import "./biography-view.css";
import { initialBioValues } from "@/constants";
import { handleProfileImpression, handleProfileVisit } from "@/helpers/utils";

const BiographyViewComponent = ({ res, searchParams, isEditable }: any) => {
  const { user, getProfile } = useAuthContext();
  const router = useRouter();
  const handleClick = (i: any) => {
    router.refresh();
    router.push(`/edit-profile?section=section-${i}`);
  };

  const { slug } = useParams();
  const search = useSearchParams();
  const published = search.get("published");
  const session_id = search.get("session_id") || "";
  const lastSectionRef = useRef(null);
  const [sections, setSections] = useState([]);
  const [bio, setBio] = useState<any>([]);

  useEffect(() => {
    if (res?.data?.biography.length == 0) {
      setBio(initialBioValues);
    } else {
      setBio(res?.data?.biography);
    }
  }, [res?.data]);

  useEffect(() => {
    setSections(bio?.map((e: any, i: any) => i));
  }, [bio]);
  const isPageActive = useRef(true);
  const isAlertShown = useRef(false); // New flag to track whether the alert has been shown

  const isImpressionCounted = useRef(true); // New flag to track whether the impression is added or not

  useEffect(() => {
    if (published == "true") {
      paymentSuccess(session_id)
        .then((res) => {
          showToast(
            toast,
            TOASTR_TYPES.SUCCESS,
            "Your biography has been published successfully"
          );
          getProfile();
          router.refresh();
          console.log(res, "response ");
        })
        .catch((err) => {
          showToast(
            toast,
            TOASTR_TYPES.ERROR,
            "Failed to published biography successfully"
          );
          console.log(err, "erro");
        });
    }
  }, []);

  useEffect(() => {
    isImpressionCounted.current = false;
    const timeoutId = setTimeout(() => {
      if (!isImpressionCounted.current) {
        handleProfileImpression(slug, user);
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [slug, user]);

  useEffect(() => {
    isPageActive.current = true;

    const handleTimeoutAction = () => {
      if (isPageActive.current && !isAlertShown.current) {
        handleProfileVisit(slug, user);
        isAlertShown.current = true;
      }
    };

    const handleScroll = () => {
      if (isPageActive.current && !isAlertShown.current) {
        handleProfileVisit(slug, user);
        isAlertShown.current = true;
      }
      isPageActive.current = false;
    };

    let timeoutId = setTimeout(handleTimeoutAction, 5000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clear the timeout and update the page activity flag when the component unmounts
      clearTimeout(timeoutId);
      isPageActive.current = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);

  const [activeSection, setActiveSection] = useState(0);
  const handleScroll = () => {
    const headerOffset = 100;
    const navbarHeight = 50;
    for (let i = sections.length - 1; i >= 0; i--) {
      const targetSection = document.getElementById(sections[i]);
      if (targetSection) {
        const sectionRect = targetSection.getBoundingClientRect();
        if (sectionRect.top - headerOffset <= navbarHeight) {
          setActiveSection(i);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleSidebarItemClick = (index: number) => {
    const targetSection = document.getElementById(sections[index]);
    if (targetSection) {
      var headerOffset = 100;
      var elementPosition: any = targetSection?.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile && lastSectionRef.current) {
      const lastSectionHeight: number = (
        lastSectionRef.current as HTMLDivElement
      ).offsetHeight;
      const marginBottom: number = Math.max(
        window.innerHeight - lastSectionHeight - 210,
        0
      );

      (
        lastSectionRef.current as HTMLDivElement
      ).style.marginBottom = `${marginBottom}px`;
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col xl:flex-row gap-7 xl:gap-8">
      <Contents
        bio={bio}
        activeSection={activeSection}
        handleSidebarItemClick={handleSidebarItemClick}
      />

      <div className="xl:w-[60%] order-3 xl:order-2 ">
        <div
          className=""
          id={`content-container`}
        >
          {bio?.map((section: any, i: number) => {
            return (
              <div
                className="mb-30 border border-transparent"
                id={sections[i]}
                key={i}
                ref={i === sections.length - 1 ? lastSectionRef : null}
              >
                <div className="flex gap-1 items-center relative xl:px-24">
                  <h2 className="text-white-heading text-18 font-semibold leading-28">
                    {section?.title}
                  </h2>
                  {searchParams?.type !== "preview" && (
                    <button
                      className="cursor-pointer"
                      onClick={() => handleClick(i)}
                    >
                      <Icon.IcPencil />
                    </button>
                  )}
                </div>
                <div
                  className="description-paragraph text-white-para text-14 font-normal leading-24 ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline "
                  dangerouslySetInnerHTML={{ __html: section?.description }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <PersonalDetail
        profile={res?.data}
        isEditable={isEditable}
      />
    </div>
  );
};

export default BiographyViewComponent;
