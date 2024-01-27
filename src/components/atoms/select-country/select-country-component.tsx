"use client";
import React from "react";
import Label from "../label";
import ErrorLabel from "../error-label";
import { ISelectCountry } from "./select-country-types";
import "./select-country.css";
import { countries } from "@/lib/country";
import { Select } from "antd";
const { Option } = Select;

const SelectCountryComponent = ({
  id,
  name,
  label,
  value = "",
  required = false,
  errorMessage = "",
  showError,
  onSelect,
  containerClassName = "",
}: ISelectCountry) => {
  const countriesList = Object.keys(countries).map((country_code) => ({
    country_code,
    name: countries[country_code].name,
    image: countries[country_code].image,
  }));

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <div
        className={`${containerClassName} ${
          showError && errorMessage ? "select-country-error" : ""
        }`}
      >
        {label && (
          <Label
            id={id || name}
            name={label}
            required={required}
            className=""
          />
        )}
        <Select
          showSearch
          style={{ width: "100%" }}
          value={value}
          filterOption={filterOption}
          className="select-country"
          onSelect={(e) => {
            onSelect(e);
          }}
        >
          {countriesList.map((value, i) => {
            return (
              <Option
                value={value?.country_code}
                key={i}
                label={value?.name}
              >
                <div className="flex flex-row">
                  <img
                    title="Flag"
                    height={25}
                    width={25}
                    src={value?.image}
                    alt="Flag"
                    loading="eager"
                  />
                  <span>{value.name}</span>
                </div>
              </Option>
            );
          })}
        </Select>
        {showError && <ErrorLabel message={errorMessage} />}
      </div>
    </>
  );
};

export default SelectCountryComponent;
