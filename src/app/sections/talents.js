export default function Talents({ data = [] }) {
    return (
        <div className="w-full flex justify-center md:justify-start">
            <div className="font-medium w-min">
                {
                    data.map((item) => (
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>
    )
}