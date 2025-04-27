import { useState } from "react";
import { sanitizeNumber } from "../utils/sanitizeNumber"; // Adapte le chemin

/**
 * Hook pour gérer un champ de nombre positif (entier ou décimal)
 * - Remplace la virgule par un point
 * - Empêche plusieurs points
 * - Empêche les caractères invalides
 * - Fournit la valeur brute et la valeur nettoyée
 */
export function usePositiveNumberInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(",", ".");

    // Autoriser vide
    if (inputValue === "") {
      setValue(inputValue);
      return;
    }

    // Refuser plusieurs points
    const pointsCount = (inputValue.match(/\./g) || []).length;
    if (pointsCount > 1) {
      return;
    }

    // Accepter seulement chiffres + éventuellement un point
    if (/^\d*(\.\d*)?$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const sanitizedValue = sanitizeNumber(value);

  return {
    value,
    handleChange,
    sanitizedValue,
    setValue, // utile si tu veux reset ou modifier à la main
  };
}
