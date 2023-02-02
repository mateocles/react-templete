import React from 'react'
import { Button } from 'antd'

const Index = ({ ...props }) => {
	return (
		<Button type='primary' {...props}>
			{props.name}
		</Button>
	)
}

export default Index
