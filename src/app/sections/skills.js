import Skill from "../componenets/skill";

export default function Skills({ data = [] }) {

    return (
        <div className="font-medium">
            {
                data.map((item) => (
                    <Skill name={item.name} level={item.level} />
                ))
            }
        </div>
    )
}