/**
 * cn() class-name helper.
 *
 * Why it exists: merges conditional Tailwind classes without conflicts
 * across components.
 * How it works: twMerge(clsx(inputs)).
 * How to change it: nothing to change; import { cn } from "@/lib/utils".
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
