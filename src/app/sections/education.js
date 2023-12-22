export default function Education({data = []}) {
    return (
        <div className="flex flex-col gap-10">
            {
                data.map((item) => (
                    <div>
                        <p className="font-bold">{item.year}</p>
                        <p className="font-bold">{item.schoolName}</p>
                        <p className="font-medium">{item.faculty}</p>
                        <p>{item.comment}</p>
                    </div>
                ))
            }
        </div>
    )
}