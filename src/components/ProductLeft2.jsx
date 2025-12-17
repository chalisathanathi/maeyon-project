import Button from "./Button";
import Description from "./Description";

export default function ProductLeft2(){
    return (
        <div className="flex justify-center items-center gap-x-5">
            <div className="w-1/2">
                <img src="public\img\vintage notebook.png" alt="vintage notebook" />
            </div>
            <div className="flex flex-col justify-center items-start gap-y-8 px-10 w-3/5 h-full">
                <h4 className="text-4xl font-bold">Vintage Notebook</h4>
                <Description className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse officiis maxime aperiam vitae corrupti, nulla sapiente blanditiis ex explicabo delectus, placeat facilis voluptates tempora? Voluptatum quos fuga laborum ut molestiae!</Description>
                <Button>Buy Now</Button>
            </div>
        </div>
    )
}