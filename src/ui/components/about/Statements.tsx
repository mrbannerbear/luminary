import Section from "@/ui/shared/Section";

const Statements = () => {
  interface statementsObj {
    id: number;
    title: string;
    content: string;
  }

  const companyInfo: statementsObj[] = [
    {
      id: 1,
      title: "Our Mission",
      content: `At Luminary, our mission is to take direct action to address 
          pressing environmental challenges. We invest in renewable energy projects, such as solar and wind farms, and combat climate change. 
          We support conservation initiatives to protect endangered 
          species and their habitats, including efforts to combat deforestation and ocean pollution. 
          Through partnerships with local communities and organizations, we work to implement sustainable practices and promote environmental stewardship worldwide
          We strive to raise awareness about environmental issues and provide practical solutions to 
          inspire positive change.`,
    },
    {
      id: 2,
      title: "Our Vision",
      content: `Our vision at Luminary is a world where sustainability is ingrained in every aspect of society, from individual lifestyles to global policies.
           We envision vibrant ecosystems, thriving communities, and a harmonious relationship between humanity and nature. By promoting innovation, equity, and 
           resilience, we aspire to lead the way towards a future where environmental stewardship is a fundamental value embraced by all.`,
    },
    {
      id: 3,
      title: "Our Values",
      content:
        "At Luminary, our values guide everything we do. We are committed to integrity, transparency, and accountability in our actions and decisions. We prioritize inclusivity, diversity, and respect for all living beings. We believe in collaboration, empathy, and the power of collective action to effect meaningful change. Our dedication to continuous learning, innovation, and adaptability ensures that we remain at the forefront of sustainable solutions and advocacy.",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-center items-start flex-wrap lg:flex-nowrap gap-5 lg:gap-10">
        {companyInfo.map((each) => (
          <div key={each.id} className="lg:w-1/3 lg:text-center">
            <h3 className="font-medium text-2xl my-3">{each.title}</h3>
            <p>{each.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Statements;
