import React from "react";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import MemberCard from "@/components/molecules/member-card";
import LoadMoreBtn from "./load-more-btn";
import MoreMembers from "./more-members";

const MemberListing = ({ data, searchQuery }: any) => {
  return (
    <>
      <Header />
      <main className="main-container pt-48 pb-64">
        <h1 className="text-white-heading text-32 font-semibold leading-40">
          Our Members <span className="text-[0]"> (Putiton-E Biograpby)</span>
        </h1>
        {searchQuery?.length > 0 && data?.meta?.pagination?.total > 0 && (
          <p className="text-white-heading text-16 font-normal leading-24 mt-8">
            <span>{data?.meta?.pagination?.total}</span>{" "}
            {data?.meta?.pagination?.total > 1 ? "Results" : "Result"} found
          </p>
        )}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 mt-48">
          {data &&
            data?.data.map((val: any) => (
              <MemberCard
                key={val.id}
                {...val}
              />
            ))}
          <MoreMembers />
          {data?.data.length == 0 && (
            <p className="text-white-heading text-16 font-normal leading-24">
              No results found
            </p>
          )}
        </div>
        {
          <LoadMoreBtn
            showButton={Boolean(data?.meta?.pagination?.links?.next)}
          />
        }
      </main>
      <Footer />
    </>
  );
};

export default MemberListing;
