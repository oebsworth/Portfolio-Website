'use client'

import { useState } from 'react'

const ExperiencesPage = () => {
    const [selectedTitle, setSelectedTitle] = useState("education")

    const educationData = [
        {
            title: "Farnborough College of Technology",
            date: "2020-2022",
            description: "I completed a Game Studies course at FCOT. I acheived a MMP.",
        }
    ]

    const workExperienceData: object[] = []

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <p className='py-4 text-lg'>Browse my education and work experience below!</p>
            <div className='w-1/2 border-b-2'></div>

            <div className='py-4'>
                {["education", "work experience"].map((category, index) => (
                    <button key={`category_${index}`} onClick={() => setSelectedTitle(category)} className='border-2 mx-2 py-2 px-4 sm:mx-4 sm:px-8 uppercase'>{category}</button>
                ))}
            </div>

            {selectedTitle == "education" ? (
                <div>
                    {educationData.map((education, index) => (
                        <div key={`education_${index}`} className='flex flex-col justify-start items-center text-lg py-2'>
                            <h2 className='text-xl'>{education.title}</h2>
                            <h2 className='text-xl'>{education.date}</h2>   
                            <p className="pt-2">{education.description}</p>
                        </div>
                    ))}
                </div>
            ) : selectedTitle == "work experience" ? (
                <div>
                    {workExperienceData.length == 0 ? (
                        <p className='text-lg'>Currently no work experience.</p>
                    ) : workExperienceData.map((workExperience, index) => (
                        <div>

                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default ExperiencesPage