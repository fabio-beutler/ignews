import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button className={styles.signInButton} type='button'>
      <FaGithub color='#04d361' />
      {session.user.name}
      <a onClick={() => signOut()}>
        <FiX color='#737380' className={styles.closeIcon} />
      </a>
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type='button'
      onClick={() => signIn('github')}
    >
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  )
}
