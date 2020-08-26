import { InjectionToken } from '@angular/core';

export const errorCodes = {
    required: ({ controlName }) => `${controlName || 'ველი'} აუცილებელია`,
    maxlength: ({ requiredLength, actualLength }) => `მაქსიმუმ ${requiredLength} სიმბოლო`,
    pattern: () => ``,
    less: () => ``,
    unique: ({ controlName }) => `${controlName} უკვე არსებობს`,
    email: ({ controlName }) => `${controlName || 'ველი'} არასწორია`,

};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
    providedIn: 'root',
    factory: () => errorCodes
});

