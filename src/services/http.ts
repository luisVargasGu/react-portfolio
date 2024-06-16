export const getCookie = (name) => {
  const cookies = Object.fromEntries(
    document.cookie.split('; ').map((c) => c.split('='))
  )
  return cookies[name]
}
