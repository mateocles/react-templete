import React from 'react'
import { Row, Col, Layout } from 'antd'

import { Login as FormLogin } from './Components/FormLogin/FormLogin'

export const Login = () => {
	return (
		<Layout.Content className='max__height'>
			<Row className='max__height'>
				<div className='content singup__content singup__container home'>
					<Row className={'ant-row ant-row-center max__height'}>
						<Col span={7} style={{ marginTop: '4%', marginBottom: '2%' }}>
							<FormLogin />
						</Col>
					</Row>
				</div>
			</Row>
		</Layout.Content>
	)
}
