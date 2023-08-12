export default function CommentContent({data}){
    return (
        <div className="p-2.5 flex gap-2">
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            <div className="rounded-md px-2 py-1.5 bg-gray-500 flex-col flex leading-4">
                <span className="text-xs font-semibold">{ data.username }</span>
                <span className="text-md">{ data.content }</span>
            </div>
        </div>
    )
}