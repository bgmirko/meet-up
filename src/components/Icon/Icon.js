import React from 'react'

import icons from '../../assets/img/icon/sprite.svg'

import classes from './Icon.css';

const Icon = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={`${classes.Icon} icon-${props.name}`}
		>
			<use xlinkHref={`${icons}#${props.name}`} />
		</svg>
	)
}

export default Icon