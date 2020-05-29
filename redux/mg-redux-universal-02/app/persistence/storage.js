export const put = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const get = (key) => {
  return window.localStorage.getItem(key)
}

export const remove = (key) => {
  return window.localStorage.removeItem(key)
}

export const clear = () => {
  window.localStorage.clear()
}
