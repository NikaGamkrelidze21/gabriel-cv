import Skill from "../componenets/skill";

export default function Skills({ data = [] }) {

    return (
        <div className="font-medium flex flex-col gap-2">
            {
                data.map((item) => (
                    <Skill name={item.name} level={item.level} />
                ))
            }
        </div>
    )
}