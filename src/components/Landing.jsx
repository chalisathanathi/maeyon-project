import  Button  from "./Button"

export default function Landing() {
    return (
        <div className="flex justify-center items-center gap-x-10">
            <div className="flex flex-col justify-start items-start gap-y-8 w-1/2">
                <div className="flex flex-col justify-start items-start text-7xl font-bold ">
                    <h1>Vintage</h1>
                    <h1>Stationery</h1>
                </div>
                <p className="text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cum quam sint quas, molestias nesciunt aliquid atque consequatur. Earum, perferendis.</p>
                <div>
                    <Button>Explore More</Button>
                </div>
            </div>
            <div className="w-1/2">
                <img src="public\img\antique landing.jpg" alt="product in landing page" />
            </div>
        </div>
    )
}