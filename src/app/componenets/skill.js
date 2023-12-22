
export default function Skill({ name, level }) {
    return (
        <div className="grid grid-cols-3 w-full gap-5 items-center group h-10 text-md">
            <p className="">{name}</p>
            <div className="relative flex items-center w-full col-span-2 bg-[var(--custom-brown-40)] rounded-full ">
                <div style={{ width: `${level}%` }} className={` h-4 bg-[var(--custom-brown)] rounded-full group`}>
                </div>

                <p className="absolute mx-[50%] text-[var(--custom-white)] text-sm text-center hidden group-hover:block">
                    {level}%
                </p>
            </div>
        </div>
    )
}