import Link from 'next/link'

import {AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const HomePage = () => {
  return (
    <main className='w-screen h-screen gradient-background flex flex-col justify-start items-center text-white'>
      <h1 className='py-3 text-4xl'>Oliver Ebsworth</h1>
      <img src="./images/profile.png" width={256} height={256} alt='Profile Image' className='rounded-full' />
      <div id="socials" className='flex py-4 text-2xl'>
        <Link href="mailto:ebswortholiver@gmail.com" className='px-1'><AiOutlineMail/></Link>
        <Link href="https://github.com/oebsworth" target='_blank' rel='noreferrer noopener' className='px-1'><AiFillGithub/></Link>
        <Link href="https://www.linkedin.com/in/oebsworth/" target='_blank' rel='noreferrer noopener' className='px-1'><AiFillLinkedin/></Link>
        <Link href="https://twitter.com/EbsworthOliver" target='_blank' rel='noreferrer noopener' className='px-1'><AiFillTwitterCircle/></Link>
      </div>
      <div className='w-1/2 border-b-2'></div>
      <p className='py-4 text-lg'>Thank you for visiting my portfolio. I am a dedicated programmer who derives great satisfaction from the <br/> process of crafting exceptional digital solutions.</p>
      <div className='w-1/2 border-b-2'></div>
      <div className='py-6'>
        {["projects", "experiences", "skills"].map((title, index) => (
          <Link key={`button_${index}`} href={title == "projects" ? "/" : `/${title}`} className='border-2 mx-4 py-2 px-8 uppercase'>{title}</Link>
        ))}
      </div>
      <div className='w-1/2 border-b-2'></div>
      <p className='py-4 text-lg'>Explore my projects by navigating using the buttons below!</p>
      <div className='w-1/2 border-b-2'></div>
      <div className='pb-4 py-4'>
        <Link href="https://github.com/oebsworth/KitchenChaos" target='_blank' rel='noreferrer noopener'><img src="./images/kitchen-chaos.png" width={128} height={128} alt="Kitchen Chaos" className='rounded-full' /></Link>
      </div>
    </main>
  )
}

export default HomePage;