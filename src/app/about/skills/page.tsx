export default function Skills() {
  return (
    <>
      <div className="container max-w-7xl mx-auto text-muted-foreground p-7">
        <h1 className="text-4x1 fond-bold mb-12">Technical skills</h1>
        <section>
          <h2 className="text-2xl font-bold mb-4"> Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'},
              {name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'},
              {name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
              {name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
              {
                name: 'TypeScript',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
              },
              {name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'},
              {name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'},
              {name: 'TailwindCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'},
              {name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'},
              {name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg'},
              {name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'},
              {name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/langfr-200px-GitHub_Invertocat_Logo.svg.png'}
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-50 rounded-lg p-4 flex items-center justify-center"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12"
                  title={skill.name}
                />
              </div>
            ))}
          </div>
        </section>


        <div className="flex items-center justify-center gap-52 p-7 ">
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Créole Haïtien (Langue maternelle)</li>
            <li>Français</li>
            <li>Anglais</li>
            <li>Allemand</li>
          </ul>
        </div>
      </div>
    </>

  )
}