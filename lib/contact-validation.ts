const contactNamePattern = /^[\p{L}][\p{L}\p{M} .'-]*$/u;
const contactEmailPattern = /^[^\s@]+@[^\s@]+\.com$/i;

export function isValidContactName(name: string) {
  return contactNamePattern.test(name.trim());
}

export function isValidContactEmail(email: string) {
  return contactEmailPattern.test(email.trim());
}
