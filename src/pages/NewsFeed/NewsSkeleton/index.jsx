const NewsSkeleton = () => {
    return (
        <div className="flex bg-white flex-col p-4 gap-4 border rounded-xl">
            <div className="flex gap-1">
                <div className="w-12 h-12 rounded-full bg-zinc-300 flex-shrink-0"></div>
                <div className="flex flex-col gap-1 w-full">
                    <span className="w-1/2 h-1/2 rounded-lg bg-zinc-300"></span>
                    <span className="w-1/3 h-1/2 rounded-lg bg-zinc-300"></span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="h-5 w-full bg-zinc-300 rounded-md"></div>
                <div className="h-5 w-3/4 bg-zinc-300 rounded-md"></div>
                <div className="h-5 w-1/3 bg-zinc-300 rounded-md"></div>
            </div>
            <div className="flex gap-3">
                <span className="w-7 h-7 rounded-md bg-zinc-300"></span>
                <span className="w-7 h-7 rounded-md bg-zinc-300"></span>
            </div>
        </div>
    )
}

export default NewsSkeleton;