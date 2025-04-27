import React from "react";
import { usePositiveNumberInput } from "../hooks/usePositiveNumberInput"; // Adapte le chemin

interface PositiveNumberFieldProps {
  id: string;
  label: string;
  value?: string; // Pas besoin de gestion de valeur externe
  onChange?: (value: string) => void; // Peut être utilisé si nécessaire
  required?: boolean;
  className?: string;
  placeholder?: string;
}

const PositiveNumberField: React.FC<PositiveNumberFieldProps> = ({
  id,
  label,
  value = "", // Valeur par défaut vide
  onChange,
  required = false,
  className = "",
  placeholder = "",
}) => {
  // Utilisation du hook pour gérer l'état du champ
  const {
    value: inputValue,
    handleChange,
    sanitizedValue,
  } = usePositiveNumberInput(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e); // Utilise le handleChange du hook
    if (onChange) {
      onChange(sanitizedValue); // Envoie aussi la valeur nettoyée au parent si onChange est fourni
    }
  };

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        required={required}
        placeholder={placeholder}
        inputMode="decimal"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default PositiveNumberField;
