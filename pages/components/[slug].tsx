import GenericLayout from '../../layouts/GenericLayout'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Pagination from '../../components/Pagination'
import { mdList } from '../../markdown'

interface IComponentProps {
  slug: string,
  nextLink: string,
  previousLink: string
}

export default function Components(props: IComponentProps) {
  return (
    <>
      {/* eslint-disable */}
      <ReactMarkdown children={mdList[props.slug]} components={{
        /* eslint-disable */
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            /* eslint-disable */
            // @ts-ignore
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }} />
      <Pagination nextLink={props.nextLink} previousLink={props.previousLink} />
    </>
  )
}

Components.Layout = GenericLayout

export async function getStaticPaths() {
  const paths = Object.keys(mdList)
  return {
    paths: paths.map(path => {
      return { params: { 'slug': path } }
    }),
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const { params: { slug } } = context
  const paths = Object.keys(mdList)
  const nextLink = paths[paths.indexOf(slug) + 1] || null
  const previousLink = paths[paths.indexOf(slug) - 1] || null
  return {
    props: { slug, nextLink, previousLink },
  }
}