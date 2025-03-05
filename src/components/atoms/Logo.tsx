import Image from "next/image";

export default function Logo() {
    return (
        <div className="">
            <Image src={'/Logo.svg'} width={2} height={1} alt="logo" className="w-auto h-10" />
        </div>

    )
}
