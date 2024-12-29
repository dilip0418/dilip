import IconLink from './IconLink'
import { Github, Linkedin, Mail } from 'lucide-react'

const SocialHandles = () => {
    return (
        <div className='flex justify-around space-x-6'>
            <IconLink href="https://github.com/dilip0418" ariaLabel="GitHub Profile">
                <Github className="w-6 h-6" />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/dilip-kumar-bk/" ariaLabel="LinkedIn Profile">
                <Linkedin className="w-6 h-6" />
            </IconLink>
            <IconLink href="#" ariaLabel="Email Address">
                <Mail className="w-6 h-6" />
            </IconLink>
        </div>
    )
}

export default SocialHandles
