import Section from "@/ui/shared/Section"
import data from "../../../../public/homePrograms.json"


const Programs = () => {
    console.log(data)
    return (
        <Section>
            <h2>What Are We Working On?</h2>
            <p>Take a look at our current programs, collaborations with local governments, scientists & more.</p>

            <div className="mt-6">

        {
            data.slice(0,3).map(each => (
                <div key={each.id} 
                style={{backgroundImage: `url(${each.image})`}}>
                    {each.name}
                </div>
            ))
        }


            </div>
        </Section>
    );
};

export default Programs;