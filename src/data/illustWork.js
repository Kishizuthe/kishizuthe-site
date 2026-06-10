export default Array.from({ length: 7 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return { images: [`/images/illust/work/${n}.jpg`] }
}).reverse()
