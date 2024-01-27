import { Icon } from '@/components/atoms/icons';
import React from 'react';
import SearchSuggestions from '../search-suggestions';
import { ISearchResults } from "./types";
import { useRouter } from 'next/navigation';

const SearchSuggestionComponent = ({ handleInputChange, query, filteredItems, handleClearInput, loader, showResults, setShowResults }: ISearchResults) => {

  const router = useRouter()
  return (
    <div className="relative order-3 xl:order-2 w-full xl:w-[367px]">
      <input
       className="w-full px-42 py-5 md:py-9 rounded border border-border-color bg-input-background text-16 font-normal leading-24 text-input-text-color placeholder:text-placeholder-text-color focus:outline-none focus:shadow-input-shadow text-ellipsis focus:placeholder:opacity-0"
        placeholder='Search' 
        value={query}
        onClick={() => setShowResults(true)}
        onChange={(e) => {
        handleInputChange(e.target.value);
         }
         }
        onKeyUp={(e) => {
            // console.log(e.keyCode,"e.keyCode>>>")
            if(e.key == "Enter" && query !== ""){
                 router.push(`/members?q=${query}`);
                 setShowResults(false)
            }
        }}
      />
      <div className="absolute top-[8px] md:top-[12px] left-[14px]">
        <Icon.IcSearch />
      </div>
      <div className="absolute top-[8px] md:top-[12px] right-[14px]">
        {query &&
          <button onClick={handleClearInput}>
            <Icon.IcCross />
          </button>
        }
      </div>
      {(query.length > 0 && showResults) && <SearchSuggestions filteredItems={filteredItems} loader={loader} query={query} setShowResults={setShowResults} className="md:max-h-96 max-h-80"/>}
    </div>
  );
};

export default SearchSuggestionComponent;
