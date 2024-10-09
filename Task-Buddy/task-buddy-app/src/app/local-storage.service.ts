import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string): any {
    if (key) {
      const item = localStorage.getItem(key);
      try {
        return item ? JSON.parse(item) : null; // Parse JSON safely
      } catch (e) {
        console.error(`Error parsing localStorage item for key: ${key}`, e);
        return null; // Return null if JSON is invalid
      }
    }
    return null; // Handle SSR case
  }

  setItem(key: string, value: any): void {
    if (value) {
      try {
        const stringValue = value?.toString() || JSON.stringify(value); // Safely handle null/undefined
        localStorage.setItem(key, stringValue);
      } catch (e) {
        console.error(`Error setting localStorage item for key: ${key}`, e);
      }
    }
  }
}
