import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneHref(tel: string) {
  return `tel:${tel}`;
}
