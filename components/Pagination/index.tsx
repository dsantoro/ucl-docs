import React from "react";
import * as S from './styled'
import Link from 'next/link'

import { capitaliseFirst } from "../../utils";

interface IPagination {
  nextLink: string,
  previousLink: string
}

const Pagination = ({ previousLink, nextLink }: IPagination) => {
  return (
    <S.Wrapper>
      {previousLink ? <S.Info><span>Previous</span><Link title={`Check it out the ${capitaliseFirst(previousLink)} component`} href={previousLink}>{previousLink}</Link> </S.Info> : <S.Info></S.Info>}
      {nextLink ? <S.Info><span>Next</span><Link title={`Check it out the ${capitaliseFirst(nextLink)} component`} href={nextLink}>{nextLink}</Link> </S.Info> : <S.Info></S.Info>}
    </S.Wrapper>
  )
}

export default Pagination