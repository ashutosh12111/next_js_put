"use client";
import AuthLayout from "@/app/(auth)/layout";
import React from "react";
import FormHeader from "../../(auth)/elements/form-header/form-header.component";
import TextInput from "@/components/atoms/text-input";
import CustomButton from "@/components/atoms/button";
import Link from "next/link";
import { useRegisterContext } from "@/context/register-context";
import { useRouter } from "next/navigation";

const BecomeMemberComponent = () => {
  const { formik } = useRegisterContext();
  const router = useRouter();

  const handleSubmit = () => {
    formik?.setTouched({
      email: true,
      password: true,
    });

    if (!formik?.errors?.email && !formik?.errors?.password) {
      router.push("/set-up-account");
    }
  };

  return (
    <AuthLayout>
      <div>
        <div
          className=""
          onKeyUp={(e) => {
            if (e.keyCode == 13) {
              handleSubmit();
            }
          }}
        >
          <FormHeader
            title="Become a member"
            description="Fill in your email and password"
          />
          <form>
            <div className="mb-32">
              <TextInput
                id="email"
                name="email"
                type="email"
                label="Email"
                containerClassName="mb-16"
                value={formik?.values.email}
                showError={Boolean(formik?.touched.email)}
                onChange={formik?.handleChange}
                onBlur={(e) => {
                  formik?.handleBlur(e);
                }}
                errorMessage={formik?.errors.email}
                required={true}
                autoFocus={false}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                containerClassName="mb-16"
                value={formik?.values.password}
                showError={Boolean(formik?.touched.password)}
                onChange={formik?.handleChange}
                onBlur={(e) => {
                  formik?.handleBlur(e);
                }}
                errorMessage={formik?.errors.password}
                required={true}
              />
            </div>
            <CustomButton
              title="Next"
              className="w-full"
              variant="primary"
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            />
          </form>
          <div className="mt-16 text-white-para text-center text-16 leading-24 font-normal">
            Already have an account on Putiton-E?{" "}
            <Link
              href="/sign-in"
              className="text-blue-link hover:text-hover-blue-link transition duration-[0.4s] text-16 leading-24 font-semibold whitespace-nowrap"
            >
              Login now
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default BecomeMemberComponent;
