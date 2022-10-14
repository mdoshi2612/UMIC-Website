export type HomeData = {
  imageLink: string
  infoText: string
  clickLink: string
  bgLink: string
  imgDescription: string
  rightSided: boolean
}

export type Image = {
  alt: string
  description: string
  slug: number
  src: string
  type: string
  visible: boolean
}

export type SocialContactLinks = {
  email: string
  fb: string
  linkedin: string
}

export type TeamMember = {
  department: string
  image: string
  interest: string
  links: SocialContactLinks
  name: string
  phone: string
  position: string
  rollNumber: string
  subsystem: string
  teamName: string
}
