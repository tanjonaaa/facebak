import React from 'react'

function News() {
  return (
    <div>
        
    <header className="flex p-2.5 py-3.5 fixed w-full bg-white border-b">
        <div class="flex justify-between w-full">
            <a href="#">App name or logo</a>
            <div>
            
                <a class="link-to-profile" href="/link-to-user-profile">
                    profile image
                </a>
            </div>
        </div>
    </header>

    <div class="h-12"></div>

    <div class="contentBody mt-3 flex w-full">
        <aside class="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
            <div class="asidePadded w-100"></div>
        </aside>

        <main class="mainPage flex flex-col gap-4">

            <section class="news-component flex bg-white flex-col p-4 gap-4 border rounded-xl" id="multiplier">
                <div class="header-news-component flex gap-2 items-center">
                    <div class="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">avatar</div>
                    <div class="meta-news-container flex flex-col">
                        <span class="username leading-3 font-bold text-gray-700">Username</span>
                        <span class="text-xs text-gray-600 font-semibold">2hr ago</span>
                    </div>
                </div>
                <div class="news-content">
                    
                    <div class="text-container">content text..., Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolorem dolores fugit incidunt iure minima molestias mollitia? Cupiditate et facilis id ipsum, laudantium officiis, quia quibusdam rem sit tempore veniam.</div>
                </div>
                <div class="footer-news-component">
                    <div class="btn-row-container">
                        <button class="rounded-btn p-1 border rounded-md bg-gray-100 hover:bg-gray-300">

                            <span>0</span>
                            <span>Like</span>
                        </button>
                        <button class="rounded-btn p-1 border rounded-md bg-gray-100 hover:bg-gray-300">
                           
                            <span>0</span>
                            <span>comment</span>
                        </button>
                    </div>
                </div>
            </section>

        </main>


        <aside class="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
            <div class="asidePadded w-100"></div>
        </aside>
    </div>

    <div class="py-3"></div>
    </div>
  )
}

export default News