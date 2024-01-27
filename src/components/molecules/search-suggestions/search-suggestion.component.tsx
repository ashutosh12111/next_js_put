import React, { useEffect, useRef } from "react";
import SearchSuggestionList from "./search-suggestion-list";

const SearchSuggestionComponent = ({ filteredItems, loader, query, setShowResults, className }: any) => {

    const outerDivRef = useRef<HTMLInputElement>(null);
    

    useEffect(() => {
        // Function to handle clicks outside the outer div
        function handleClickOutside(event: any) {
            if (outerDivRef.current && !outerDivRef.current.contains(event.target)) {
                // The click occurred outside the outer div, perform your action here
                setShowResults(false)
            }
        }

        // Add a click event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className="relative" ref={outerDivRef}>
            <div className="absolute py-16 pl-16 pr-2  w-full border border-border-color rounded focus:outline-none focus:border-blue-500 bg-gray-400 z-30">
                {loader ? (
                    <div className="text-white">Loading...</div>
                ) : filteredItems.length > 0 ? (
                    <div>
                        {" "}
                        <ul className={`flex flex-col gap-3 scroll-smooth overflow-y-auto modal-scroll ${className}`}>
                            {filteredItems.map((item: any, index: number) => (
                                <SearchSuggestionList key={index} {...item} />
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="text-white-heading text-16 font-normal leading-24">No results found</div>
                )}
            </div>
        </div>
    );
};

export default SearchSuggestionComponent;
