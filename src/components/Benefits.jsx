export default function Benefits(){
    return (
        <div className="flex flex-col justify-center items-center gap-y-15 px-40">
            <h2 className="text-5xl font-bold tracking-wide text-orange-900">Benefits</h2>
            <div className="flex justify-center  items-center gap-x-15">
                <div className="flex flex-col justify-center items-center gap-y-3 bg-white rounded-2xl p-7">
                    <img src="" alt="best quality" />
                    <h5 className="text-2xl font-bold text-orange-900">Best Quality</h5>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, maxime.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-3 bg-white rounded-2xl p-7">
                    <img src="" alt="free shipping" />
                    <h5 className="text-2xl font-bold text-orange-900">Free Shipping</h5>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, maxime.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-3 bg-white rounded-2xl p-7">
                    <img src="" alt="great design" />
                    <h5 className="text-2xl font-bold text-orange-900">Great Design</h5>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, maxime.</p>
                </div>
            </div>
        </div>
    )
}