'use client'

import { useState } from 'react'

const ExperiencesPage = () => {
    const [selectedTitle, setSelectedTitle] = useState("education")

    const educationData = [
        {
            title: "Farnborough College of Technology",
            date: "2020-2022",
            description: "While working at Farnborough, I gained basic skills in 3D modeling and programming. After leaving in May 2022, I focused on improving and expanding my abilities in these areas, working hard to enhance my proficiency. I achieved a MMP.",
        }
    ]

    const workExperienceData = [
        {
            title: "Pool Helper",
            company: "Farnborough Fins",
            date: "2019-2020",
            description: "2019: I worked as a dedicated pool helper for Farnborough Fins, I ensured a safe environment for young children during their activities. I collaborated with a new team each shift, building new relationships in real-time to provide the best experience for teachers and the children that were taking part. Unfortunately this position ended due to covid."
        }
    ]

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <p className='py-4 text-lg'>Browse my education and work experience below!</p>
            <div className='w-1/2 border-b-2'></div>

            <div className='py-4'>
                {["education", "work experience"].map((category, index) => (
                    <button key={`category_${index}`} onClick={() => setSelectedTitle(category)} className={`border-2 mx-2 py-2 px-4 sm:mx-4 sm:px-8 uppercase ${selectedTitle == category ? "inner-shadow" : ""}`}>{category}</button>
                ))}
            </div>

            {selectedTitle == "education" ? (
                <div>
                    {educationData.map((education, index) => (
                        <div key={`education_${index}`} className='flex flex-col justify-start items-center text-lg py-2'>
                            <h2 className='text-xl'>{education.title}</h2>
                            <h2 className='text-xl'>{education.date}</h2>
                            <p className="w-[45%] pt-2">{education.description}</p>
                        </div>
                    ))}
                </div>
            ) : selectedTitle == "work experience" ? (
                <div>
                    {workExperienceData.length == 0 ? (
                        <p className='text-lg'>Currently no work experience.</p>
                    ) : workExperienceData.map((workExperience, index) => (
                        <div key={`work-experience_${index}`} className='flex flex-col justify-start items-center text-lg py-2'>
                            <h2 className='text-xl'>{workExperience.title}, {workExperience.company}</h2>
                            <h2 className='text-xl'>{workExperience.date}</h2>
                            <p className="w-[45%] pt-2">As a dedicated pool helper at Farnborough Fins, I ensured a safe and enjoyable
                                environment for young children during aquatic activities. Collaborating with the team, I
                                prioritized safety and positive engagement for families. Unfortunately this position ended
                                due to COVID-19.</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default ExperiencesPage