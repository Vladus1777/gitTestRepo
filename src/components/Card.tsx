import { Link } from 'react-router-dom'

const Card = ({ className, ...props }) => {
    return (
        <Link
            to={props.to}
            className={`flex h-full min-w-36 max-w-xs transform flex-col justify-center gap-2 rounded-lg border border-gray-200 bg-white p-6 shadow hover:animate-pulse hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${className}`}
        >
            {props.label && (
                <h5 className="truncate text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.label}
                </h5>
            )}

            <div className="font-normal text-gray-700 dark:text-gray-400">
                {props.children}
            </div>
        </Link>
    )
}

export default Card
