import { Link, routes } from '@redwoodjs/router'

type HeroLayoutProps = {
  children?: React.ReactNode
}

const HeroLayout = ({ children }: HeroLayoutProps) => {
  return (
    <>
      <header>
        <nav>
          <h1 className="text-xl">Nav</h1>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <h1 className="text-xl">Footer</h1>
      </footer>
    </>
  )
}

export default HeroLayout
