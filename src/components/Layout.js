import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// styles
import { container, navLink, heading, siteTitle } from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query  {
            site {
                siteMetadata {
                    title
                    }
                }
            }
        `)
      console.log(data)
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <Link to="/" className={navLink}>Home</Link>
                <Link to="/about" className={navLink}>About</Link>
                <Link to="/blog" className={navLink}>Blog</Link>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
