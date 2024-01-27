"use client"
import React, { useEffect, useState } from 'react'
import SearchSuggestionComponent from './search.component'
import useSearch from '@/hooks/useSearch';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation'


const SearchContainer = () => {
    const API_ENDPOINT = "/api/encyclopedia/search-member"
    const { query,setQuery, filteredItems, handleInputChange, handleClearInput, loader } = useSearch(API_ENDPOINT);
    const [showResults, setShowResults] = useState(true);
    const searchParams = useSearchParams()
    const search = searchParams.get('q')

    const path = usePathname()

    useEffect(() => {
           setQuery(search || "");
           setShowResults(false)
    },[])

    

    const searchBarHidden = ["/set-up-account","/privacy-policy","/terms-and-conditions"]

    return (
        <>
       {!searchBarHidden.includes(path) && <SearchSuggestionComponent filteredItems={filteredItems} query={query} handleInputChange={handleInputChange} handleClearInput={handleClearInput} loader={loader} showResults={showResults} setShowResults={setShowResults}/>}
        </>
    )
}

export default SearchContainer