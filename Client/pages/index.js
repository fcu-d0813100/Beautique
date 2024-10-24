import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/eddy_item/common/placeholder-text'

export default function Home() {
  return (
    <>
      {/* Header & Nav*/}
      <header style={styles.header}>
        <h1>My Website</h1>
        <nav>
          <ul style={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/activity">活動</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* BestSeller*/}
        <h2>Welcome to My Website</h2>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </>
  )
}

const styles = {
  header: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    marginTop: '20px',
  },
}
