function range(prefix, start, end) {
  const imgs = []
  for (let i = start; i <= end; i++) {
    imgs.push(`/images/photo/toy/${prefix}_${i}.jpg`)
  }
  return imgs
}

const SMENA8M = {
  camera: 'SMENA8M',
  cameraUrl: 'http://www.lomography.jp/microsite/smenajp/about.html',
}
const FISHEYE2 = {
  camera: 'LOMO Fisheye2',
  cameraUrl: 'http://www.lomography.jp/microsite/fisheye2jp/',
}
const HOLGA = {
  camera: 'HOLGA',
  cameraUrl: 'http://www.lomography.jp/microsite/holgajp/',
}

export default [
  {
    id: 'comiket-2007',
    title: '2007夏コミ',
    ...SMENA8M,
    description: '2007年夏コミ。笑い栗くんが出店したので行ってみました。',
    images: range('007', 0, 6),
  },
  {
    id: 'summer-2007',
    title: '2007夏',
    ...SMENA8M,
    description: '2007年夏の日常。下北沢周辺、ときどき恵比寿。',
    images: range('006', 0, 10),
  },
  {
    id: 'bulb',
    title: '開放',
    ...FISHEYE2,
    description: 'シャッターを開放してみました。',
    images: range('005', 0, 2),
  },
  {
    id: 'tsuruma',
    title: '鶴舞',
    ...FISHEYE2,
    description: '名古屋 鶴舞の風景。',
    images: range('004', 0, 1),
  },
  {
    id: 'hime',
    title: '姫',
    ...FISHEYE2,
    description: '実家の愛犬。',
    images: range('003', 0, 1),
  },
  {
    id: 'kani-fisheye',
    title: '可児魚眼',
    ...FISHEYE2,
    description: '地元の風景。',
    images: range('002', 0, 4),
  },
  {
    id: 'kani-holga',
    title: '可児ホル',
    ...HOLGA,
    description: '地元の町並みをホルガで。',
    images: range('001', 0, 3),
  },
]
