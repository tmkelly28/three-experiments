export const rand = (min, max) => (Math.random() * (max - min)) + min

export const times = n => cb => {
  for (let i = 0; i < n; i++) cb()
}
