import { Link, routes } from '@redwoodjs/router'

type HeroLayoutProps = {
  children?: React.ReactNode
}

const HeroLayout = ({ children }: HeroLayoutProps) => {
  return (
    <>
      <header>
        <nav>
          <h1>Nav</h1>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default HeroLayout
