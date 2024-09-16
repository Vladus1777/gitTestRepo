import { Outlet } from 'react-router-dom'

export default function CollectionLayout() {
	// const navigation = useNavigation()
	return (
		<>
			{/* <MainHeader /> */}
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	)
}
