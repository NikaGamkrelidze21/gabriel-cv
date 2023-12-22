import Skill from "../componenets/skill";

export default function Languages({data = []}) {
    return(
        <div>
            {
                data.map((item) => (
                    <Skill name={item.language} level={item.level} />
                ))
            }
        </div>
    )
}