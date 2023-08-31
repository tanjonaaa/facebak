const BioContainer = ({children}) => {
    return (
        <div className="w-full">
            <hr className="h-0.5 w-full border-0 bg-zinc-300 m-0 p-0"/>
            <div className="text-lg py-2 text-center">
                {children}
            </div>
            <hr className="h-0.5 w-full border-0 bg-zinc-300 m-0 p-0"/>
        </div>
    )
}

export default BioContainer;