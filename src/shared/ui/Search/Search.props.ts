type SearchTypeField = "text" | "number";
type sizeInput = "small" | "medium" | "large";

export interface SearchProps {
    placeholder?: string;
    width?: sizeInput;
    className?: string;
    id?: string;
    type?: SearchTypeField;
  }