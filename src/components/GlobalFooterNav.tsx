import { Link } from 'react-router-dom'
import { Fragment } from 'react'

const links = [
    { label: 'HOME', path: '/' },
    { label: 'BLOG', path: 'http://kishizuthe.blog.shinobi.jp/', external: true },
    { label: 'ILLUST', path: '/illust' },
    { label: 'PHOTO', path: '/photo' },
    { label: 'BBS', path: '/bbs' },
    { label: 'LINK', path: '/link' },
    { label: 'INFO', path: '/info' },
]

export default function GlobalFooterNav() {
  return (
    <nav className="l-foot-nav">
			{links.map((item, i) => (
				<Fragment key={item.label}>
					{item.external ? (
						<a href={item.path} className="nav-link" target="_blank" rel="noopener noreferrer">
							{item.label}
						</a>
					) : (
						<Link to={item.path} className="nav-link">
							{item.label}
						</Link>
					)}
					{i < links.length - 1 && <span aria-hidden="true">｜</span>}
				</Fragment>
			))}
    </nav>
	)
}

