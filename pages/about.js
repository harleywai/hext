import Head from 'next/head'
import Header from '../components/sections/Header'
import PageHeader from '../components/elements/header/page-header'
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="About Us" />
      </header>
      <main className='main'>
        <div className='container'>
          About Us page
        </div>
      </main>
    </>
  )
}