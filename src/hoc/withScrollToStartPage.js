
import React, { useEffect } from 'react'

const withScrollToStartPage = (Component) => {
	const NewComponent = props => {
		useEffect(() => {
			window.scrollTo(0, 0)
		})
		return (
			<div>
				<Component {...props} />
			</div>
		)

	}
	return NewComponent
}

export default withScrollToStartPage
