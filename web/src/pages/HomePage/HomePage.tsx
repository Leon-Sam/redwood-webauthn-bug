import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const {
    isAuthenticated,
    client: webAuthn,
    loading,
    logOut,
    reauthenticate,
  } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <Link to={routes.signup()}>Signup</Link>
      <br />
      <Link to={routes.login()}>Login</Link>

      <p>Is Authenicated? {isAuthenticated ? 'yes' : 'no'}</p>
      <p>Is WebAuthn Supported? {webAuthn.isSupported ? 'yes' : 'no'}</p>
      <p>Is WebAuthn Enabled? {webAuthn.isEnabled ? 'yes' : 'no'}</p>

      <button
        onClick={() => {
          logOut()
        }}
      >
        Logout
      </button>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
