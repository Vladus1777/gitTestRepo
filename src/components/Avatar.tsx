interface Props extends ImgHTMLAttributes<HTMLImageElement> {}
export const Avatar = ({ className, ...props }): Props => {
	return <img className={`w-10 h-10 rounded-full ${className}`} {...props} />
}
