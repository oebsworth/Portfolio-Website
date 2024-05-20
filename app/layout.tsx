import '../styles/main.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { FaItchIo } from 'react-icons/fa'
import { PageSelection } from '../components/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oliver Ebsworth | Portfolio',
  description: 'Development portfolio.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className + "w-screen h-screen gradient-background flex flex-col justify-start items-center text-white"}>
        <h1 className='py-3 text-4xl'>Oliver Ebsworth</h1>
        <img src="./images/profile.png" width={256} height={256} alt='Profile Image' className='rounded-full' />
        <div id="socials" className='flex py-4 text-2xl'>
          <Link href="mailto:ebswortholiver@gmail.com" className='px-1'><AiOutlineMail /></Link>
          <Link href="https://github.com/oebsworth" target='_blank' rel='noreferrer noopener' className='px-1'><AiFillGithub /></Link>
          <Link href="https://www.linkedin.com/in/oebsworth/" target='_blank' rel='noreferrer noopener' className='px-1'><AiFillLinkedin /></Link>
          <Link href="https://twitter.com/EbsworthOliver" target='_blank' rel='noreferrer noopener' className='px-1'><AiFillTwitterCircle /></Link>
          <Link href="https://oebsworth.itch.io/" target='_blank' rel='noreferrer noopener' className='px-1'><FaItchIo /></Link>
        </div>
        <div className='w-1/2 border-b-2'></div>
        <p className='w-[45%] py-4 text-lg'>Thank you for visiting my portfolio. I am a dedicated programmer who derives great satisfaction from the process of crafting exceptional digital solutions.</p>
        <div className='w-1/2 border-b-2'></div>
        <PageSelection />
        <div className='w-1/2 border-b-2'></div>
        {children}
      </body>
    </html>
  )
}
