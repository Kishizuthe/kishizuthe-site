import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './GlobalNav.module.scss'

const menuItems = [
  {
    label: 'HOME',
    path: '/',
    hasDropdown: false,
  },
  {
    label: 'PHOTO',
    path: '/photo',
    hasDropdown: true,
    dropdownItems: [
      { label: 'デジカメ', path: '/photo/digi' },
      { label: 'トイカメラ', path: '/photo/toy' },
      { label: '加工', path: '/photo/retouch' },
    ],
  },
  {
    label: 'ILLUST',
    path: '/illust',
    hasDropdown: true,
    dropdownItems: [
      { label: 'シュミヱ', path: '/illust/syumi' },
      { label: 'オエビヱ', path: '/illust/oebi' },
      { label: 'シゴトヱ', path: '/illust/work' },
    ],
  },
  {
    label: 'LINK',
    path: '/link',
    hasDropdown: false,
  },
  {
    label: 'BLOG',
    path: 'http://kishizuthe.blog.shinobi.jp/',
    hasDropdown: false,
    external: true,
  },
]

export default function GlobalNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const closeDropdown = () => setOpenDropdown(null)

  return (
    <nav className={styles['m-globalNav']}>
      <ul className={styles['m-globalNav__list']}>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={styles['m-globalNav__item']}
            onMouseEnter={() => item.hasDropdown ? setOpenDropdown(item.label) : null}
            onMouseLeave={closeDropdown}
          >
            {item.external ? (
              <a href={item.path} className={styles['m-globalNav__link']} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              // 現在のURLと一致したとき自動で active クラスを付与する
              <NavLink to={item.path} className={({ isActive }) => isActive ? `${styles['m-globalNav__link']} ${styles['active']}` : styles['m-globalNav__link']} end>
                {item.label}
                {item.hasDropdown && <span className={styles['m-globalNav__linkIcon']}>▼</span>}
              </NavLink>
            )}

            {item.hasDropdown && openDropdown === item.label && (
              <ul className={styles['m-globalNavDropdown__menu']}>
                {item.dropdownItems?.map((subItem) => (
                  <li key={subItem.label}>
                    <NavLink to={subItem.path} className={({ isActive }) => isActive ? `${styles['m-globalNavDropdown__link']} ${styles['active']}` : styles['m-globalNavDropdown__link']}>
                      {subItem.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
