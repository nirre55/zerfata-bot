/**
 * Nettoie un champ de saisie numérique
 * - Remplace une valeur "." seule par une chaîne vide
 * - Trim automatiquement
 * @param value Le texte saisi
 * @returns Le texte nettoyé
 */
export function sanitizeNumber(value: string): string {
  const cleaned = value.trim();

  if (cleaned === ".") {
    return "";
  }

  return cleaned;
}
