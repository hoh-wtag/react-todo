import DOMPurify from "dompurify";

export const sanitizeText = (text) => {
  const sanitizedHTML = DOMPurify.sanitize(text);
  const sanitizedText = new DOMParser().parseFromString(
    sanitizedHTML,
    "text/html"
  ).body.textContent;

  return sanitizedText;
};
