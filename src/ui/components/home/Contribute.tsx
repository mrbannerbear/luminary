import Section from "@/ui/shared/Section";
import Socials from "@/ui/shared/Socials";

const Contribute = () => {

    interface contributeObject {
        id: number
        height: string
        headline: string
        caption: string
        cta: JSX.Element
    }

    const flexItems : contributeObject[] = [
        {
            id: 1,
            height: "h-56 lg:h-80",
            headline: "How You Can Help Us",
            caption: "",
            cta: <button className="border-purple-50">Get Involved</button>
        },
        {
            id: 2,
            height: "h-56 lg:h-96",
            headline: "Donate for a Project",
            caption: "Starting from as little as $10, you can contribute to one of our projects",
            cta: <button className="border-purple-50">Contribute Now</button>
        },
        {
            id: 3,
            height: "h-56 lg:h-80",
            headline: "Follow us on our socials",
            caption: "",
            cta: <Socials className={"flex text-2xl gap-3"}/>
        }
    ]

    return (
        <Section>

            <div className="flex flex-col lg:flex-row justify-between items-center text-purple-50 lg:px-6">
                {
                    flexItems.map(each => (
                        <div key={each.id} className={`${each.height} flex flex-col gap-2 justify-center items-center
                        w-full lg:w-1/3 text-center border-2 bg-purple-950
                        border-purple-50`}>
                            <h3 className="text-2xl">{each.headline}</h3>
                            <p>{each.caption}</p>
                            <div>{each.cta}</div>
                        </div>
                    ))
                }
            </div>
            
        </Section>
    );
};

export default Contribute;