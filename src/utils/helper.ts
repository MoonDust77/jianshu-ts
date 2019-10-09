export const copyObject = (obj: object) => {
  return JSON.parse(JSON.stringify(obj))
}
