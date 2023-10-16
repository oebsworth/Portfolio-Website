import Link from 'next/link'

const HomePage = () => {
  return (
    <main className='gradient-background flex flex-col justify-start items-center text-white'>
      <h1 className='py-2 text-4xl'>Oliver Ebsworth</h1>
      <img src="./images/profile.png" width={256} height={256} alt='Profile Image' className='rounded-full' />
      <div id="socials" className='py-4'>

      </div>
      <div className='w-full border-b-2'></div>
      <p className='py-4 text-lg'>Thank you for visiting my portfolio. I am a dedicated programmer who derives great satisfaction from the process of crafting exceptional digital solutions.</p>
      <div className='w-full border-b-2'></div>
      <div className='py-6'>
        {["projects", "experience", "skills"].map((title, index) => (
          <Link key={`button_${index}`} href={title == "projects" ? "/" : `/${title}`} className='border-2 mx-6 py-2 px-8 uppercase'>{title}</Link>
        ))}
      </div>
      <div className='w-full border-b-2'></div>
      <p className='py-4 text-lg'>Explore my projects by navigating using the buttons below!</p>
      <div className='pb-4'>
        <button><img src="./images/kitchen-chaos.png" width={128} height={128} alt="Kitchen Chaos" className='rounded-full' /></button>
      </div>
    </main>
  )
}

export default HomePage;