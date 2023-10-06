import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'

function BookIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M23.495,6.424c-0.278-1.131-1.389-2.03-2.597-2.257C18.384,4,12,4,12,4s-6.384,0-8.899,0.168 C1.882,4.396,0.771,5.295,0.493,6.424C0.167,8.181,0,9.961,0,12c0,2.038,0.167,3.819,0.493,5.575 c0.278,1.131,1.389,2.03,2.597,2.257C5.616,20,12,20,12,20s6.384,0,8.899-0.168c1.207-0.226,2.319-1.125,2.597-2.257 C23.833,15.818,24,14.038,24,12C24,9.961,23.833,8.181,23.495,6.424z M9.999,15.467v-6.95l6.78,3.476L9.999,15.467z" />
    </svg>
  )
}

function AmazonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M21.3,0H2.7C1.2,0,0,1.2,0,2.7v18.6C0,22.8,1.2,24,2.7,24h18.6C22.8,24,24,22.8,24,21.3V2.7C24,1.2,22.8,0,21.3,0z M18.7,18.8 c-0.5,0.2-0.9,0.3-1.4,0.3c-1,0-1.6-0.6-1.6-1.5v-3.9h2.9v-1.8h-2.9V9.2c-1,0.4-2.1,0.6-3.2,0.6c-2.2,0-3.9-1.7-3.9-3.8 c0-2.1,1.7-3.8,3.9-3.8c1.1,0,2.1,0.2,3.2,0.7V6h2.9V8h-2.9v5.1h2.9v1.8h-2.9V18c0,1.7,1.3,3,3,3c0.6,0,1.1-0.1,1.6-0.3L18.7,18.8 L18.7,18.8z" />
      <path d="M6.8,17.2c0.6,0.6,1.5,1,2.5,1c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9c-1,0-1.9,0.4-2.5,1V6.8H4.4V18h2.3V17.2z M7.8,14.9c0.4-0.4,1-0.7,1.5-0.7c0.9,0,1.6,0.7,1.6,1.6s-0.7,1.6-1.6,1.6c-0.6,0-1.1-0.3-1.5-0.7V14.9z" />
    </svg>
  )
}

function FeedIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        The Book of Revelation{' '}
        <span className="text-sky-300">An AI Learning Tool</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
    While you read the Book of Revelation you might come across terms and concepts that you don&apos;t understand. Type them in the box below and the AI will help you understand their meaning.
</p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="https://www.youtube.com/playlist?list=PLHBeS6kh6-vEcrznQAEdRdGypbvTVgWYC" icon={YouTubeIcon} className="flex-none">
          Read Through Videos
        </IconLink>
        <IconLink href="https://www.amazon.com/gp/product/B0C9L1QBKF?ref_=dbs_m_mng_rwt_calw_tkin_39&amp;storeType=ebooks&_encoding=UTF8&tag=mjfellowactua-20&linkCode=ur2&linkId=9d4f0d99c3efc74302faf0e6892684f3&camp=1789&creative=9325" icon={BookIcon} className="flex-none">
          Study Guide Book
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by Bible Intelligence{' '}
    </p>
  )
}
