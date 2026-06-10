function range(prefix, start, end, pad2 = false) {
  const imgs = []
  for (let i = start; i <= end; i++) {
    const n = pad2 ? String(i).padStart(2, '0') : i
    imgs.push(`/images/photo/digi/${prefix}_${n}.jpg`)
  }
  return imgs
}

const RICOH_GX100 = {
  camera: 'RICOH Caplio GX100',
  cameraUrl: 'http://www.ricoh.co.jp/dc/caplio/gx100/',
}
const CANON_IXY70 = {
  camera: 'Canon IXY DIGITAL 70',
  cameraUrl: 'http://cweb.canon.jp/e-support/qa/1055/app/servlet/qadoc?qa=047622',
}

export default [
  {
    id: 'osaka-kobe',
    title: '大阪・神戸',
    ...RICOH_GX100,
    description: '2009年、大阪・神戸。52枚！',
    images: range('008', 1, 52, true),
  },
  {
    id: 'thailand',
    title: 'タイ旅行',
    ...RICOH_GX100,
    description: 'タイ旅行の写真、ドパっと70枚！',
    images: ['/images/photo/digi/007_0.jpg', ...range('007', 1, 69, true)],
  },
  {
    id: 'osu',
    title: '大須',
    ...CANON_IXY70,
    description: '名古屋の変な街、大須周辺。',
    images: ['/images/photo/digi/006_0.jpg', ...range('006', 1, 8)],
  },
  {
    id: 'factory',
    title: '工場',
    ...CANON_IXY70,
    description: '夕暮れの工場。',
    images: ['/images/photo/digi/005_0.jpg', ...range('005', 1, 2)],
  },
  {
    id: 'ochobo',
    title: 'おちょぼ稲荷',
    ...CANON_IXY70,
    description: '実家の愛犬と散歩に行った地元の神社。',
    images: ['/images/photo/digi/001_0.jpg', ...range('001', 1, 5)],
  },
  {
    id: 'kani-sky',
    title: '可児ソラ',
    ...CANON_IXY70,
    description: '地元の青空。',
    images: ['/images/photo/digi/002_0.jpg', ...range('002', 1, 8)],
  },
  {
    id: 'kani-flowers',
    title: '可児ハナ',
    ...CANON_IXY70,
    description: '地元や名古屋の草花。',
    images: ['/images/photo/digi/003_0.jpg', ...range('003', 1, 8)],
  },
]
