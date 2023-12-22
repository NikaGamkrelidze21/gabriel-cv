export default function Talents({ data=[] }) {
    return (
        <div className="font-medium">
            { 
            data.map((item) => (
                <p>{item}</p>
            ))
            }

        </div>
    )
}