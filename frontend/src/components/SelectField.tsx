import React from "react";

// Interface pour les options
interface Option {
  value: string;
  label: string;
}

// Props du composant SelectField
interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string | Option>;
  required?: boolean;
  className?: string;
}

/**
 * Composant de champ de sélection réutilisable
 * @param props - Les propriétés du composant
 * @returns Le composant SelectField
 */
const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  className = "",
}) => {
  // Vérifier si une option est de type Option ou string
  const isOptionObject = (option: string | Option): option is Option => {
    return typeof option === "object" && option !== null;
  };

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        required={required}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={isOptionObject(option) ? option.value : option}
          >
            {isOptionObject(option) ? option.label : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
