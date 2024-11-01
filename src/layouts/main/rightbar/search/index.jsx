import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

export default function Search() {


    const [query, setQuery] = useState("")
    const [focus, setFocus] = useState(false)
    const ref = useRef()
    useClickAway(ref, () => {
        setFocus(false)
    })

    return (
        <div
            ref={ref}
            className="min-h-[32px] h-[54px] mb-3 flex items-center relative">
            <label
                htmlFor=""
                className="relative rounded-full block h-[43px] bg-[#202327] w-full group focus-within:bg-black border border-transparent focus-within:border-[#1d9bf0]">
                <div
                    className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
                    <CiSearch
                        className="min-h-[32px] h-[18.75px] text-[#71767b] " />
                </div>
                <input
                    type="text"
                    placeholder="Ara"
                    value={query}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={e => setQuery(e.target.value)}
                    className="w-full h-full placeholder-[#71767b] bg-transparent rounded-full outline-none pl-[56px] text-[15px] " />
                {(query && focus) && (
                    <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 mr-3 invisible group-focus-within:visible">
                        <IoMdCloseCircle className="w-full h-full text-[#1d9bf0] " />
                    </button>

                )}
            </label>
            {focus && (
                <div
                    className="absolute top-full -left-px  w-[350px] min-h-[100px] bg-black -translate-y-1 shadow-box mt-2 rounded-lg max-h-[calc(80vh-53px)] text-center ">
                    <p
                        className="p-3 pt-5 text-[#71767b] leading-5">Kisileri, listeleri veya anahtar kelimeleri aramayi dene</p>
                </div>
            )}

        </div>
    )
}