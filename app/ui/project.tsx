import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Project(props: { title: string, description: string, github?: string, link?: string }) {

  let link = props.link ?? false
  let github = props.github ?? false

  let linkComponent
  if (link)
    linkComponent = <>
      <Link href={link} className='text-2xl' target="_blank">
        <FontAwesomeIcon icon={faGlobe} />
      </Link>
    </>

  let githubComponent
  if (github)
    githubComponent = <>
      <Link href={github} className='text-2xl' target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </>


  return (
    <div className="grid gap-4 p-4 border-2 rounded">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className='flex space-x-4'>
        {linkComponent}
        {githubComponent}
      </div>
    </div>
  )
}
