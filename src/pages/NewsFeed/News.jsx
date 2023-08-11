export function News({data}) {
    return (
        <section className="news-component flex bg-white flex-col p-4 gap-4 border rounded-xl" id="multiplier">
            <div className="header-news-component flex gap-2 items-center">
                <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">avatar</div>
                <div className="meta-news-container flex flex-col">
                    <span className="username leading-3 font-bold text-gray-700">Username</span>
                    <span className="text-xs text-gray-600 font-semibold">2hr ago</span>
                </div>
            </div>
            <div className="news-content">
                <div className="text-container">{data.content}</div>
            </div>
            <div className="footer-news-component">
                <div className="btn-row-container">
                    <button className="rounded-btn p-1 border rounded-md bg-gray-100 hover:bg-gray-300">

                        <span>0</span>
                        <span>Like</span>
                    </button>
                    <button className="rounded-btn p-1 border rounded-md bg-gray-100 hover:bg-gray-300">

                        <span>0</span>
                        <span>comment</span>
                    </button>
                </div>
            </div>
        </section>

    )
}
