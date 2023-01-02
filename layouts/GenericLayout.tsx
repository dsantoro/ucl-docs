import React from "react"
import Header from "../components/Header"
import MenuList from "../components/MenuList"
import * as S from './styled'

import { mdList } from "../markdown"

const GenericLayout = (props: any) => {
	const paths = Object.keys(mdList)
	return (
		<S.Wrapper>
			<Header />
			<S.Main>
				<S.Aside>
					<MenuList pageList={paths} />
				</S.Aside>
				<S.Container>
					{props.children}
				</S.Container>
			</S.Main>
		</S.Wrapper>
	)
}

export default GenericLayout