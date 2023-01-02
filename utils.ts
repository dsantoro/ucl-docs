export const capitaliseFirst = (word: string): string => {
  const uniqueWord = word.split(' ')[0];
  const result = uniqueWord.charAt(0).toUpperCase() + uniqueWord.slice(1);
  return result;
}