import Link from 'next/link'

const HomePage = () => {

  const projectData = [
    {
      link: "github.com/oebsworth/KitchenChaos",
      image: "kitchen-chaos",
      alternate: "Kitchen Chaos",
    }
  ]

  return (
    <div className='flex flex-col justify-start items-center w-full'>
      <p className='py-4 text-lg'>Explore my projects by navigating using the buttons below!</p>
      <div className='w-1/2 border-b-2'></div>
      <div className='pb-4 py-4'>
        {projectData.map((project, index) => (
          <Link key={`project_${index}`} href={`https://${project.link}`} target='_blank' rel='noreferrer noopener'><img src={`./images/${project.image}.png`} width={128} height={128} alt={project.alternate} className='rounded-full' /></Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage;