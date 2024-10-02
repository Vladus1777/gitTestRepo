import TabsItem from './TabsItem'

const Tabs = ({ className, ...props }) => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="-mb-px flex flex-wrap gap-2 text-center text-sm text-gray-500 dark:text-gray-400">
                {props.children}
            </ul>
        </div>
    )
}

export default Tabs
export { TabsItem }
