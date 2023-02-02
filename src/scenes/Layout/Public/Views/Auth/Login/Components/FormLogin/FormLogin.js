import React from 'react'
import { Form, Input, Row, Col, Spin } from 'antd'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../../../../../../../services/Auth/AuthActions'
import Button from '../../../../../../../../components/Button/Button'

export const Login = ({ form }) => {
	const { login } = auth
	const dispatch = useDispatch()
	const { loading } = useSelector((state) => state.auth)
	const { t } = useTranslation()

	const handleSubmit = (values) => {
		dispatch(login(values.email, values.password))
	}

	return (
		<Spin spinning={loading} delay={500}>
			<Form
				onFinish={handleSubmit}
				className='login__content'
				name='FormLogin'
				initialValues={{ remember: true }}>
				<Row>
					<Col span={24}>
						<Form.Item name='username' rules={[{ required: true, message: `${t('login.email')}` }]}>
							<Input placeholder={t('login.email')} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Form.Item
							name='password'
							rules={[{ required: true, message: `${t('login.pleace')}s ${t('login.password')}` }]}>
							<Input type='password' placeholder={t('login.password')} />
						</Form.Item>
					</Col>
				</Row>
				<Row type='flex' className='mt-4' justify='center'>
					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							name={t('login.singin')}
							className='login-form-button mb-2 button singup__submit'
						/>
					</Form.Item>
				</Row>
			</Form>
		</Spin>
	)
}
