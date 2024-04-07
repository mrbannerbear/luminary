import Section from "@/ui/shared/Section";
import Impact_Counter from "./Impact_Counter";

const Impact = () => {

  return (
    <Section>
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-medium mb-2">
            <span>
              <Impact_Counter />+
            </span>{" "}
            people involved
          </h1>
          <p>
            People from more than 70 countries are directly involved in our
            projects.
          </p>
        </div>
        <div>
       
        </div>
      </div>
    </Section>
  );
};

export default Impact;
