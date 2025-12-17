import Button from "./Button";
import Description from "./Description";

export default function ProductLeft1(){
    return (
        <div className="flex justify-center items-center gap-x-5 mt-10">
            <div className="w-1/2">
                <img src="public\img\Wax Seal Kit.png" alt="wax seal kit" />
            </div>
            <div className="flex flex-col justify-center items-start gap-y-8 px-10 w-3/5 h-full">
                <h4 className="text-4xl font-bold">Wax Seal Kit</h4>
                <Description className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse officiis maxime aperiam vitae corrupti, nulla sapiente blanditiis ex explicabo delectus, placeat facilis voluptates tempora? Voluptatum quos fuga laborum ut molestiae!</Description>
                <Button>Buy Now</Button>
            </div>
        </div>
    )
}