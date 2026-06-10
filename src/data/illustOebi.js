export default Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return { images: [`/images/illust/oebi/${n}.jpg`] }
}).reverse()
