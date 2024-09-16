import { Outlet } from 'react-router-dom'
import { MainHeader } from '../components/MainHeader'

export default function RootLayout() {
	// const navigation = useNavigation()
	return (
		<>
			<MainHeader />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	)
}
