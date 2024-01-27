export interface ISearchResults {
  query: string;
  setQuery?: any;
  filteredItems: string[];
  setItems?: string;
  handleInputChange: any;
  handleClearInput: () => void;
  loader?: Boolean;
  showResults: boolean;
  setShowResults: any
}
