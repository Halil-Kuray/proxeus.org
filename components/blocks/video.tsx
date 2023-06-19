
export const Video = () => {
    return(
        <div className=" text-center items-center">
            <div className=" prose-lg">
                <iframe 
                className="w-full h-72"
                //   src="https://share.vidyard.com/watch/GzpNVpQW228xB5uJxkoWGh"                    //vidyard
                //   src="https://powercoders.wistia.com/medias/151bs2wyay"                          //wistia
                //   src="https://videos.sproutvideo.com/embed/449fdab71c1fe4cbcd/20afa02172f58fcb"   //SPROUT video
                src="https://player.vimeo.com/video/837487333"   //vimo video
                allowFullScreen
                ></iframe>
                <p>
                    Screencast of document validation workflow (5 min), June 2023
                </p>
            </div>
        </div>
    )
}


