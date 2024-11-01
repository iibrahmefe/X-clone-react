import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { useAccount } from "~/store/auth/hook"


export default function Account() {

    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover className="relative ">
                <PopoverButton className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center outline-none text-left">
                    <img src={account.avatar} alt="" className="h-10 w-10 rounded-full" />
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold">
                            {account.fullname}
                        </h6>
                        <div className="mx-3 text-[15px] text-[#71767b] font-bold text-left">
                            @{account.username}
                        </div>
                    </div>
                </PopoverButton>
                <PopoverPanel className="absolute overflow-hidden bottom-full max-w-[300px] w-[90%] left-1/2 -translate-x-1/2 bg-black rounded-2xl shadow-box">
                    <PopoverButton className="p-3   hover:bg-[#eff3f41a] w-full flex items-center outline-none text-left">
                        <img src={account.avatar} alt="" className="h-10 w-10 rounded-full" />
                        <div className="mx-3 text-[15px]">
                            <h6 className="font-bold">
                                {account.fullname}
                            </h6>
                            <div className="mx-3 text-[15px] text-[#71767b] font-bold text-left">
                                @{account.username}
                            </div>
                        </div>
                    </PopoverButton>
                    <PopoverButton className="p-3   hover:bg-[#eff3f41a] w-full flex items-center outline-none text-left">
                        <img src={account.avatar} alt="" className="h-10 w-10 rounded-full" />
                        <div className="mx-3 text-[15px]">
                            <h6 className="font-bold">
                                {account.fullname}
                            </h6>
                            <div className="mx-3 text-[15px] text-[#71767b] font-bold text-left">
                                @{account.username}
                            </div>
                        </div>
                    </PopoverButton>
                </PopoverPanel>
            </Popover>
        </div>
    )
}