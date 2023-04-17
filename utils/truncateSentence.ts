export default function truncateSentence(
  sentence: string,
  maxLength?: number
): string {
  maxLength = maxLength || 20;
  if (sentence.length <= maxLength) {
    return sentence;
  } else {
    const truncated = sentence.substring(0, maxLength);
    // Trim any incomplete words at the end of the truncated sentence
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  }
}
