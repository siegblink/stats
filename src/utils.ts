export function dateStringToDate(dateString: string): Date {
  const dateParts = dateString.split('/').map(function(value: string): number {
    return parseInt(value)
  })
  // year, month, day
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}
