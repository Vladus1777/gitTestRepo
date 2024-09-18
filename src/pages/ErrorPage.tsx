import { useRouteError } from 'react-router-dom'
import { MainHeader } from '../components/MainHeader'

const ErrorPage = () => {
	const error = useRouteError()

	let errorMessage = 'An error occured.'
	// if (error.status === 500) {
	// 	errorMessage = error.data.message
	// }
	if (error.status === 404) {
		errorMessage = "Couldn't find resource."
	}

	return (
		<div className="grid place-items-center h-screen">
			<MainHeader />
			<section className="flex items-center justify-center flex-col  h-[50%] w-[50%] ">
				<h1 className="text-[5rem]">Oops!</h1>
				<p>{errorMessage}</p>
			</section>
		</div>
	)
}

export default ErrorPage
