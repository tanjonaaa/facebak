const UsernameContainer = ({children}) => {
    return (
        <div className="h-9 flex items-center">
            <span className="text-2xl font-bold text-zinc-800">
                {children}
            </span>
        </div>
    )
}

export default UsernameContainer;