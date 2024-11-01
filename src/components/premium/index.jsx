import Button from "../button";

export default function Premium() {
    return (
        <section className="bg-[#16181c] rounded-2xl mb-4 py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
            <h6 className="text-xl font-extrabold leading-6">Premium'a abone ol</h6>
            <span className="text-[15px] font-bold">Yeni ozellikler icin abone ol ve uygun olman durumunda reklam geliri payi kazan...</span>
            <div className="self-start">
                <Button>Abone ol</Button>
            </div>
        </section>
    )
}