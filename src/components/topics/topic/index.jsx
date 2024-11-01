import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/formats";
import { BsThreeDots } from "react-icons/bs";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Topic({ item }) {
    return (
        <Link className="py-3 px-4 hover:bg-[#eff3f41a] transition-colors relative">
            <div className="text-[13px] text-[#71767b] leading-4">{item.title}</div>
            <div className="text-[15px] font-bold leading-5 mt-0.5">
                {item.topic.type === 'tag' && '#'}{item.topic.value}
            </div>
            {item?.postCount && (
                <div className="text-[13px] text-[#71767b] leading-4 mt-1">
                    {numberFormat(item.postCount)} posts
                </div>
            )}
            <Popover className="absolute top-1.5 right-2">
                <PopoverButton
                    onClick={e => {
                        e.preventDefault();
                        console.log('tikladin');
                    }}
                    className="w-[34.75px] h-[34.75px] rounded-full flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors">
                    <BsThreeDots />
                </PopoverButton>
                <PopoverPanel className="w-[384px] z-10 bg-white shadow-lg p-4 rounded-lg">
                    !beni gordun
                </PopoverPanel>
            </Popover>
        </Link>
    );
}
