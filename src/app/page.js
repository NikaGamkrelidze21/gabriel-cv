import Image from 'next/image'
import AboutMe from './componenets/about-me'
import Portrait from './componenets/portrait'
import Section from './componenets/section'
import Education from './sections/education'
import Talents from './sections/talents'
import Skills from './sections/skills'
import Languages from './sections/languages'

export default function Home() {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-10 gap-y-20 justify-center text-[var(--custom-brown)] md:px-[10%] xl:px-[20%]">
      <header className='flex flex-col-reverse md:flex-row md:col-span-2 w-full md:h-[100vh] gap-16'>
        <AboutMe
          name={'Gabriel'}
          lastname={'tsintsadze'}
          status={'Developer'}
          description={
            " I am a fourth-year student at the University of Business and Technology. Currently, I have no work experience, but I am motivated and want to use the accumulated knowledge in practice. I haven't chosen a direction yet and I'm willing to try everything."
          }
        />

        <Portrait
          src={'/gabriel.png'}
          tel={'+995 595 58 50 05'}
          address={'Tbilisi, Mirian Mephe St.'}
          email={'Gabriel.Tsintsadze@gmail.com'}
          linkedin={'https://www.linkedin.com/'}
        />
      </header>

      <Section title={"eductation"} >
        <Education
          data={[
            {
              year: '2020-now',
              schoolName: "Business And Technical University",
              faculty: "Information Technologies",
            },
            {
              year: "2008-2020",
              schoolName: "192th Secondary School",
              comment: "Golden Medal",
            },
          ]}
        />
      </Section>

      <Section title={"skills"} >
        <Skills
          data={[
            {
              name: "UI/UX",
              level: "80"
            },
            {
              name: "Adobe",
              level: "80"
            },
            {
              name: "Microsoft",
              level: "60"
            },
            {
              name: "Python",
              level: "60"
            },
            {
              name: "C/C++/C#",
              level: "40"
            },
            {
              name: "Java",
              level: "40"
            },
            {
              name: "JS, CSS, HTML,",
              level: "40"
            },
            {
              name: "ES6, React, Next, Vue",
              level: "20"
            },
            {
              name: "Photo Editing",
              level: "40"
            },
            {
              name: "Video Editing",
              level: "40"
            },
          ]}
        
        />

      </Section>

      <Section title={"talents"} >
        <Talents
          data={[
            "Detail Oriented",
            "Analytical Thinking",
            "Troubleshooting",
            "Responsible",
            "Positive",
            "Team Worker",
            "Communicatable",
          ]}
        />
      </Section>

      <Section title={"Languages"} >
        <Languages 
        data = {[
          {
            language: "Georgian",
            level: "100"
          },
          {
            language: "English",
            level: "60"
          },
          {
            language: "Russian",
            level: "40"
          },
        ]}
        />
      </Section>
    </main>
  )
}
export function HomeSaved() {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-10 gap-y-20 justify-center text-[var(--custom-brown)] px-[20%]">
      <header className='flex w-full grid grid-cols-2 gap-40 md:col-span-2 h-[100vh]'>
        <AboutMe
          name={'Gabriel'}
          lastname={'tsintsadze'}
          status={'Developer'}
          description={
            " I am a fourth-year student at the University of Business and Technology. Currently, I have no work experience, but I am motivated and want to use the accumulated knowledge in practice. I haven't chosen a direction yet and I'm trying to try everything."
          }
        />

        <Portrait
          src={'/gabriel.png'}
          tel={'+995 595 58 50 05'}
          address={'Tbilisi, Mirian Mephe St.'}
          email={'Gabriel.Tsintsadze@gmail.com'}
          linkedin={'https://www.linkedin.com/'}
        />
      </header>

      <Section title={"eductation"} >
        <Education
          data={[
            {
              year: '2020-now',
              schoolName: "Business And Technical University",
              faculty: "Information Technologies",
            },
            {
              year: "2008-2020",
              schoolName: "192th Secondary School",
              comment: "Golden Medal",
            },
          ]}
        />
      </Section>

      <Section title={"skills"} >
        <Skills
          data={[
            {
              name: "UX",
              level: "80"
            },
            {
              name: "Adobe",
              level: "80"
            },
            {
              name: "Microsoft",
              level: "60"
            },
            {
              name: "Python",
              level: "60"
            },
            {
              name: "C/C++/C#",
              level: "40"
            },
            {
              name: "Java",
              level: "40"
            },
            {
              name: "HTML/CSS/JS",
              level: "40"
            },
            {
              name: "Photo Editing",
              level: "40"
            },
            {
              name: "Video Editing",
              level: "40"
            },
          ]}
        
        />

      </Section>

      <Section title={"talents"} >
        <Talents
          data={[
            "Detail Oriented",
            "Analytical Thinking",
            "Troubleshooting",
            "Responsible",
            "Positive",
            "Team Worker",
            "Communicatable",
          ]}
        />
      </Section>


      <Section title={"Languages"} >
        <Languages 
        data = {[
          {
            language: "Georgian",
            level: "100"
          },
          {
            language: "English",
            level: "60"
          },
          {
            language: "Russian",
            level: "40"
          },
        ]}
        />
      </Section>

    </main>
  )
}
