// Security utilities for input validation and sanitization

import { BUILDINGS, FLOORS, SPACE_TYPES, TIME_RANGES } from './mockData';

/**
 * Validates and sanitizes user input against whitelist
 * Prevents injection attacks and ensures data integrity
 */
export const validateInput = (value, allowedValues, defaultValue) => {
  if (!value || typeof value !== 'string') {
    return defaultValue || allowedValues[0];
  }

  // Trim whitespace
  const sanitized = value.trim();

  // Check if value is in whitelist
  if (allowedValues.includes(sanitized)) {
    return sanitized;
  }

  // Return default if invalid
  return defaultValue || allowedValues[0];
};

/**
 * Validates building selection
 */
export const validateBuilding = (building) => {
  return validateInput(building, BUILDINGS, BUILDINGS[0]);
};

/**
 * Validates floor selection
 */
export const validateFloor = (floor) => {
  return validateInput(floor, FLOORS, FLOORS[0]);
};

/**
 * Validates space type selection
 */
export const validateSpaceType = (spaceType) => {
  return validateInput(spaceType, SPACE_TYPES, SPACE_TYPES[0]);
};

/**
 * Validates time range selection
 */
export const validateTimeRange = (timeRange) => {
  return validateInput(timeRange, TIME_RANGES, TIME_RANGES[2]);
};

/**
 * Sanitizes string to prevent XSS attacks
 * Removes potentially dangerous characters and HTML tags
 */
export const sanitizeString = (str) => {
  if (typeof str !== 'string') {
    return String(str);
  }

  // Remove HTML tags
  const withoutTags = str.replace(/<[^>]*>/g, '');
  
  // Remove potentially dangerous characters
  const sanitized = withoutTags
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();

  return sanitized;
};

/**
 * Validates numeric input
 */
export const validateNumber = (value, min = 0, max = 100, defaultValue = 0) => {
  const num = Number(value);
  
  if (isNaN(num)) {
    return defaultValue;
  }

  if (num < min) {
    return min;
  }

  if (num > max) {
    return max;
  }

  return num;
};

/**
 * Rate limiting helper (for future API calls)
 */
export class RateLimiter {
  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }

  canMakeRequest() {
    const now = Date.now();
    // Remove requests outside the time window
    this.requests = this.requests.filter(time => now - time < this.windowMs);

    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }

    return false;
  }

  reset() {
    this.requests = [];
  }
}



