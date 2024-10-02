import { Outlet } from 'react-router-dom'
export default function CollectionLayout() {
    // const navigation = useNavigation()
    return (
        <>
            {/* <MainHeader /> */}

            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
        </>
    )
}
