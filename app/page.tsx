import Link from 'next/link'

const HomePage = () => {

  const projectData = [
    {
      link: "github.com/oebsworth/portfolio-website-nextjs-web",
      image: "portfolio-website-nextjs-web",
      alternate: "Porfolio Website",
    },
    {
      link: "github.com/oebsworth/procedural-cv-nextjs-web",
      image: "procedural-cv-nextjs-web",
      alternate: "Procedural C.V.",
    },
    {
      link: "oebsworth.itch.io/kitchen-chaos-unity",
      image: "kitchen-chaos-unity",
      alternate: "Kitchen Chaos",
    },
    {
      link: "oebsworth.itch.io/obstacle-assault-unreal",
      image: "obstacle-assault-unreal",
      alternate: "Obstacle Assault",
    },
    {
      link: "oebsworth.itch.io/time-trial-car-game-unity",
      image: "time-trial-car-game-unity",
      alternate: "Time Trial Car Game",
    },
    {
      link: "oebsworth.itch.io/warehouse-wreckage-unreal",
      image: "warehouse-wreckage-unreal",
      alternate: "Warehouse Wreckage",
    },
  ]

  return (
    <div className='flex flex-col justify-start items-center w-full'>
      <p className='py-4 text-lg'>Explore my projects by navigating using the buttons below!</p>
      <div className='w-1/2 border-b-2'></div>
      <div className='flex pb-4 py-4'>
        {projectData.map((project, index) => (
          <Link key={`project_${index}`} href={`https://${project.link}`} target='_blank' rel='noreferrer noopener'><img src={`./images/${project.image}.png`} width={128} height={128} alt={project.alternate} className='rounded-full w-[128px] h-[128px] mx-2' /></Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage;