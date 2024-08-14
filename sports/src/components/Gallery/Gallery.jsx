import React from "react";

import g1 from "../../assets/gallery/1.jpg";
import g2 from "../../assets/gallery/2.jpg";
import g3 from "../../assets/gallery/3.jpg";
import g4 from "../../assets/gallery/4.jpg";
import g5 from "../../assets/gallery/5.jpg";
import g6 from "../../assets/gallery/6.jpg";
import g7 from "../../assets/gallery/7.jpg";
import g8 from "../../assets/gallery/8.jpg";
import g9 from "../../assets/gallery/9.jpg";

const Gallery = () => {
    return (
        <div className="w-3/4 m-auto py-10">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g1}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g2}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g3}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g4}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g5}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g6}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g7}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g8}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-[225px] w-[355px] max-w-full rounded-lg"
                        src={g9}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
