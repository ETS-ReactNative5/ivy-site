import React from "react"
import styled, { css } from "styled-components"

const baseTextSize = 11

const sm = css`
  font-size: ${1.18 * baseTextSize}px;
`

const md = css`
  font-size: ${1.36 * baseTextSize}px;
`

const lg = css`
  font-size: ${1.54 * baseTextSize}px;
`

const uppercase = css`
  text-transform: uppercase;
`

const center = css`
  text-align: center;
`

const right = css`
  text-align: right;
`

const pointer = css`
  cursor: pointer;
`

const bold = css`
  font-weight: 700;
`

const lineHeight = css`
  line-height: 1.5em;
`

const Text = styled.div`
  & .adrayv-text {
    display: inline;
  }
  ${({ sm: _sm, md: _md, lg: _lg }) => (_lg ? lg : _md ? md : _sm ? sm : md)};
  ${({ uppercase: _uppercase }) => _uppercase && uppercase};
  ${({ center: _center }) => _center && center};
  ${({ right: _right }) => _right && right};
  ${({ bold: _bold }) => _bold && bold}
  ${lineHeight};
`

const Link = styled.a`
  ${pointer};
  ${lineHeight};
  text-decoration: none;
  color: black;
`

export default ({
  sm,
  md,
  lg,
  link,
  children,
  bold,
  right,
  center,
  uppercase,
}) => {
  if (link) {
    return <Link className="adrayv-text">{children}</Link>
  } else {
    return (
      <Text
        className="adrayv-text"
        sm={sm}
        md={md}
        lg={lg}
        bold={bold}
        right={right}
        center={center}
        uppercase={uppercase}
      >
        {children}
      </Text>
    )
  }
}
