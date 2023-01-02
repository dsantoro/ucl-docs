import React from "react";
import Link from 'next/link'
import * as S from './styled'

interface IMenuListProps {
  pageList: string[]
}

const MenuList = ({ pageList }: IMenuListProps) => {
  return (
    <S.List>
      <S.ListItem><Link href={`/`}>Home</Link></S.ListItem>
      {/* @ts-ignore */}
      <S.ListItem spacer></S.ListItem>
      {pageList.map((path: string) => <S.ListItem key={path}><Link href={`/components/${path}`}>{path}</Link></S.ListItem>)}
    </S.List>
  )
}

export default MenuList