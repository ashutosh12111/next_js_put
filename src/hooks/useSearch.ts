import { searchUser } from "@/services/search";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface SearchResults {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  filteredItems: any;
  setItems: Dispatch<SetStateAction<string[]>>;
  handleInputChange: (e: string) => void;
  handleClearInput: () => void;
  loader: Boolean;
}

const useSearch = (API_ENDPOINT: string): SearchResults => {
  const [query, setQuery] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 0) {
        try {
          //   setLoader(true);
          let response: any = await searchUser(API_ENDPOINT, query);
          setFilteredItems(response);
          setLoader(false);
        } catch (error) {
          console.error("===", error);
        }
      } else {
        setFilteredItems([]);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      setLoader(true);
      fetchData();
    }, 300);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [query, API_ENDPOINT]);

  const handleInputChange = (val: string) => {
    setQuery(val);
  };

  const handleClearInput = () => {
    setQuery("");
    setFilteredItems([]);
  };

  return {
    query,
    setQuery,
    filteredItems,
    setItems,
    handleInputChange,
    handleClearInput,
    loader,
  };
};

export default useSearch;
