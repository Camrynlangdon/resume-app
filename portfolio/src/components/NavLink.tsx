import React from 'react';
import Styled from 'styled-components'

const Link = Styled.a`
`

type Props = {
    href: string,
    label: string,
    openInNewTab?: boolean
}

const NavLink = ({ href, label, openInNewTab }: Props) => {
    return <Link href={href} target={openInNewTab ? "_blank" : "_self"}>{label}</Link>
}

export default NavLink;