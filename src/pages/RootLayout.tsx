import { Outlet } from 'react-router-dom'
import { MainHeader } from '../components/MainHeader'

export default function RootLayout() {
	// const navigation = useNavigation()

	return (
		<>
			<MainHeader />
			<main className="h-min-[80vh] h-[80vh] max-h-[80vh] ms-16 mt-12 w-10/12 border-2 p-5 bg-[#ccccff] md:p-10">
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}

				<Outlet />
			</main>
		</>
	)
}
