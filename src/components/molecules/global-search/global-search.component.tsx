"use client";
import { Icon } from "@/components/atoms/icons";
import useSearch from "@/hooks/useSearch";
import { showToast } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SearchSuggestions from "../search-suggestions";

const GlobalSearch = () => {
  const API_ENDPOINT = "/api/encyclopedia/search-member";
  const router = useRouter();
  const handleSearch = () => {
    if (query.length == 0) {
      showToast(toast, "ERROR", "Please enter a search.", "Error");
      return;
    } else {
      router.push(`/members?q=${query}`);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };
  const {
    query,
    setQuery,
    filteredItems,
    handleInputChange,
    handleClearInput,
    loader,
  } = useSearch(API_ENDPOINT);
  const [showResults, setShowResults] = useState(true);
  return (
    <form
      className="relative"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full rounded-lg border border-border-color bg-opacity-0.8 pl-48 pr-[111px] sm:pr-[147px] py-9 text-16 font-normal leading-24 text-input-text-color placeholder:text-placeholder-text-color focus:outline-none text-ellipsis focus:placeholder:opacity-0"
        placeholder="Search encyclopedia"
        value={query}
        onClick={() => setShowResults(true)}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        onKeyUp={(e) => {
          // console.log(e.keyCode,"e.keyCode>>>")
          if (e.key == "Enter" && query) {
            router.push(`/members?q=${query}`);
            setShowResults(false);
          }
        }}
      />
      {query.length > 0 && (
        <button
          type="button"
          className="absolute right-[83px] sm:right-[115px]  top-[12px]"
          onClick={() => setQuery("")}
        >
          <Icon.IcCross />
        </button>
      )}
      <div className="absolute top-[12px] left-[16px]">
        <Icon.IcSearch />
      </div>
      <div className="absolute top-[4px] right-[4px] z-10">
        <button
          className={`py-8 px-12 sm:px-26 bg-white-button hover:bg-hover-white-button transition duration-[0.4s] text-gray-500 text-14 font-medium leading-20 rounded-lg focus:outline-none disabled:cursor-not-allowed`}
          disabled={query.length == 0}
          type="submit"
        >
          Search
        </button>
      </div>
      {query.length > 0 && showResults && (
        <SearchSuggestions
          filteredItems={filteredItems}
          loader={loader}
          query={query}
          setShowResults={setShowResults}
          className="md:max-h-72 max-h-80"
        />
      )}
    </form>
  );
};

export default GlobalSearch;
