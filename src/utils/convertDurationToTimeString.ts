export function convertDurationToTimeString (duration): string {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const formatedTime = [hours, minutes, seconds]
    .map(each => String(each).padStart(2, '0'))
    .join(':')
  return formatedTime;
  }