import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {
  return (
    <main>
      <h1>Oliver Ebsworth</h1>
      <Image/>
      <div id="socials">

      </div>
      <div></div>
      <p>Thank you for visiting my portfolio. I am a dedicated programmer who derives great satisfaction from the process of crafting exceptional digital solutions.</p>
      <div></div>
      {["projects", "experience", "skills"].map((title, index) => (
        <Link key={`button_${index}`} href={title == "projects" ? "/" : `/${title}`}>{title}</Link>
      ))}
      <div></div>
      <p>Explore my projects by navigating using the buttons below!</p>
      <button><Image/></button>
    </main>
  )
}

export default HomePage;