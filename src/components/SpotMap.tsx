import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Leaflet のデフォルトアイコンがViteだと壊れる問題の対処
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
L.Marker.prototype.options.icon = L.icon({ iconUrl, shadowUrl: iconShadow, iconAnchor: [12, 41] })

// APIから返ってくるデータの型定義
type Spot = {
    id: string
    name: string
    coordinates: string   // "lat, lng" の文字列
    urlList: string       // カンマ区切りのURL文字列
}

export default function SpotMap() {

    // useStateで「スポット一覧」と「ホバー中のスポットID」を管理
    const [spots, setSpots] = useState<Spot[]>([])
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // useEffect：コンポーネントが画面に表示されたタイミングで1回だけ実行される
    // 第2引数の [] が「依存配列」。空配列 = 初回のみ実行
    useEffect(() => {
        const fetchSpots = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_MICROCMS_BASE_URL}/spots`,
                    { headers: { 'X-MICROCMS-API-KEY': import.meta.env.VITE_MICROCMS_API_KEY } }
                )
                if (!res.ok) throw new Error('APIの取得に失敗しました')
                const data = await res.json()
                setSpots(data.contents)
            } catch (e) {
                setError(e instanceof Error ? e.message : '不明なエラー')
            } finally {
                setLoading(false)
            }
        }

        fetchSpots()
    }, []) // ← [] = 初回マウント時のみ実行

    // "34.688, 135.563" → [34.688, 135.563] に変換するヘルパー
    const parseCoordinates = (coord: string): [number, number] => {
        const [lat, lng] = coord.split(',').map((s) => parseFloat(s.trim()))
        return [lat, lng]
    }

    // "url1,url2" → ["url1", "url2"] に変換するヘルパー
    const parseUrls = (urlList: string): string[] =>
        urlList.split(',').map((s) => s.trim()).filter(Boolean)

    if (loading) return <p>読み込み中...</p>
    if (error) return <p>エラー: {error}</p>

    // ホバー中のスポットを取得
    // const hoveredSpot = spots.find((s) => s.id === hoveredId)

    return (
        <>
            {/* 地図エリア */}
            <MapContainer
                center={[36.5, 137.0]}
                zoom={6}
                style={{ flex: 1, height: '400px' }}
            >
                {/* OpenStreetMapのタイル（地図の背景） */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />

                {/* スポットの数だけマーカーを置く */}
                {spots.map((spot) => (
                <Marker
                    key={spot.id}
                    position={parseCoordinates(spot.coordinates)}
                    eventHandlers={{
                    mouseover: () => setHoveredId(spot.id),
                    mouseout: () => setHoveredId(null),
                    }}
                >
                    <Popup>
                        <p className='leaflet-popup-content__spotName'>{spot.name}</p>
                        <ul className='leaflet-popup-content__spotNoteList'>
                            {parseUrls(spot.urlList).map((url) => (
                                <li key={url}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {url.replace('https://note.com/', 'note: ')}
                                </a>
                                </li>
                            ))}
                        </ul>
                    </Popup>
                </Marker>
                ))}
            </MapContainer>

            {/* サイドパネル：ホバー中のスポット情報 */}
            {/* <div style={{ width: '240px', overflowY: 'auto' }}>
                {hoveredSpot ? (
                <>
                    <h3>{hoveredSpot.name}</h3>
                    <ul style={{ padding: 0, listStyle: 'none' }}>
                    {parseUrls(hoveredSpot.urlList).map((url) => (
                        <li key={url}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {url.replace('https://note.com/', 'note: ')}
                        </a>
                        </li>
                    ))}
                    </ul>
                </>
                ) : (
                <p style={{ color: '#888' }}>マーカーにホバーすると詳細が表示されます</p>
                )}
            </div> */}
        </>
    )

}
