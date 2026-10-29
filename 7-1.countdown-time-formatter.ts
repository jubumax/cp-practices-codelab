/*
 * `Countdown Time Formatter`
 * 
 * Convert a non-negative integer representing total seconds into a formatted string in HH:MM:SS format.
 * 
 * Hours (HH): Total whole hours, padded with leading zeros to at least 2 digits.
 * Minutes (MM): Remaining minutes (00–59), padded to 2 digits.
 * Seconds (SS): Remaining seconds (00–59), padded to 2 digits.
 */


function formatCountdown(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number): string => String(n).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


console.log(formatCountdown(0));                            // "00:00:00"
console.log(formatCountdown(59));                           // "00:00:59"
console.log(formatCountdown(60));                           // "00:01:00"
console.log(formatCountdown(3600));                         // "01:00:00"
console.log(formatCountdown(3661));                         // "01:01:01"
console.log(formatCountdown(86400));                        // "24:00:00" (hours doesn't reset at 24)
console.log(formatCountdown(360000));                       // "100:00:00" (3 digit hours)
console.log(formatCountdown(10000000));                     // "2777:46:40"