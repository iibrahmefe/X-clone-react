import { topics } from "~/utils/const";
import Topic from "./topic";

export default function Topics() {

    return (
        <div className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
            <h5 className="px-4 py-3 flex items-center text-xl font-extrabold leading-6 text-[#e7e9ea]">İlgini cekebilecek gundemler</h5>
            <div className="grid">
                {topics.map((topic, index) => <Topic item={topic} key={index} />)}
            </div>
        </div>
    )
}