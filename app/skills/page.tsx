import React from 'react';

const SkillsPage = () => {
    const programmingLanguagesData = [
        {
            name: "C#",
            level: 7,
        },
        {
            name: "HTML",
            level: 8,
        },
        {
            name: "CSS",
            level: 7,
        },
        {
            name: "JavaScript",
            level: 9,
        },
        {
            name: "TypeScript",
            level: 5,
        },
        {
            name: "Python",
            level: 7,
        },
        {
            name: "C++",
            level: 5,
        },
    ]

    const toolsData = [
        {
            name: "Visual Studio",
            level: 5,
        },
        {
            name: "VS Code",
            level: 7,
        },
        {
            name: "Git",
            level: 6,
        },
        {
            name: "Photoshop",
            level: 7,
        },
        {
            name: "Blender",
            level: 9,
        },
        {
            name: "Figma",
            level: 7,
        },
    ]

    const frameworksAndEnginesData = [
        {
            name: "Unity",
            level: 7,
        },
        {
            name: "Unreal-Engine 5",
            level: 5,
        },
        {
            name: "React.js",
            level: 7,
        },
        {
            name: "Next.js",
            level: 8,
        },
        {
            name: "Nuxt.js",
            level: 5,
        },
    ]

    const technologiesData = [
        {
            name: "Tailwind CSS",
            level: 7,
        },
        {
            name: "GSAP",
            level: 5,
        },
        {
            name: "three.js",
            level: 6,
        },
        {
            name: "MongoDB Atlas",
            level: 6,
        },
        {
            name: "Mongoose",
            level: 7,
        },
        {
            name: "Cloudinary",
            level: 5,
        },
        {
            name: "Sanity",
            level: 6,
        },
    ]

    const getSkillLevelStyle = (level: number) => {
        const width = `${level * 10}%`;
        return { width };
    }

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <p className='py-4 text-lg'>Below you will find my self-evaluated skill levels out of ten.</p>
            <div className='w-1/2 border-b-2'></div>

            <div className="w-1/2 flex flex-col justify-start items-start px-4 pt-2">
                <h2 className='py-2'>Programming Languages:</h2>
                {programmingLanguagesData.map((programmingLanguage, index) => {
                    const skillLevelStyle = getSkillLevelStyle(programmingLanguage.level);
                    return (
                        <button key={`programming-language_${index}`} style={skillLevelStyle} className="flex justify-between max-w-full border-2 pl-2 mb-2 text-start">
                            {programmingLanguage.name}
                            <p className='pr-2'>{programmingLanguage.level}</p>
                        </button>
                    );
                })}
            </div>

            <div className="w-1/2 flex flex-col justify-start items-start px-4">
                <h2 className='py-2'>Tools:</h2>
                {toolsData.map((tool, index) => {
                    const skillLevelStyle = getSkillLevelStyle(tool.level);
                    return (
                        <button key={`programming-language_${index}`} style={skillLevelStyle} className="flex justify-between max-w-full border-2 pl-2 mb-2 text-start">
                            {tool.name}
                            <p className='pr-2'>{tool.level}</p>
                        </button>
                    );
                })}
            </div>

            <div className="w-1/2 flex flex-col justify-start items-start px-4">
                <h2 className='py-2'>Frameworks and Engines:</h2>
                {frameworksAndEnginesData.map((frameworkAndEngine, index) => {
                    const skillLevelStyle = getSkillLevelStyle(frameworkAndEngine.level);
                    return (
                        <button key={`programming-language_${index}`} style={skillLevelStyle} className="flex justify-between max-w-full border-2 pl-2 mb-2 text-start">
                            {frameworkAndEngine.name}
                            <p className='pr-2'>{frameworkAndEngine.level}</p>
                        </button>
                    );
                })}
            </div>

            <div className="w-1/2 flex flex-col justify-start items-start px-4 pb-4">
                <h2 className='py-2'>Technologies:</h2>
                {technologiesData.map((technology, index) => {
                    const skillLevelStyle = getSkillLevelStyle(technology.level);
                    return (
                        <button key={`programming-language_${index}`} style={skillLevelStyle} className="flex justify-between max-w-full border-2 pl-2 mb-2 text-start">
                            {technology.name}
                            <p className='pr-2'>{technology.level}</p>
                        </button>
                    );
                })}
            </div>

        </div>
    );
};

export default SkillsPage;
