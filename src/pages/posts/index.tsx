import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main>
        <div>
          <a>
            <time>12 de março de 2021</time>
            <strong>Título do post</strong>
            <p>Descrição do post</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Título do post</strong>
            <p>Descrição do post</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Título do post</strong>
            <p>Descrição do post</p>
          </a>
        </div>
      </main>
    </>
  )
}
