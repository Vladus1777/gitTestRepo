import { Outlet } from 'react-router-dom'
import { MainHeader } from '../components/MainHeader'

export default function RootLayout() {
	// const navigation = useNavigation()
	return (
		<>
			<MainHeader />
			<main className="bg-slate-400 ">
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	)
}
