import React from 'react'
import TopBar from '../TopBar/TopBar'
import { ReactNode } from 'react'

const Layout:React.FC<{ children: ReactNode }> = ({ children })  => {
	return (
		<div>
			<TopBar/>
      {children}

		</div>
	)
}

export default Layout
