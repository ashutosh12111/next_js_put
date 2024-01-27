"use client";
import { useState } from "react";

function useDropdownToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
  };
}

export default useDropdownToggle;
