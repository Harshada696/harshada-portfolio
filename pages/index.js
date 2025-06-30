import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Head>
        <title>Harshada Mundwadkar Portfolio</title>
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center">
          <Image src="/profile.jpg" alt="Harshada" width={150} height={150} className="rounded-full mx-auto" />
          <h1 className="text-3xl font-bold mt-4">Harshada Mundwadkar</h1>
          <p className="mt-2 text-lg">Computer Science Student | Full-Stack Developer | Cloud Enthusiast</p>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <Skills />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <Projects />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  )
}