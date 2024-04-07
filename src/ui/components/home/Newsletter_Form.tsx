"use client"

const NewsletterForm = () => {
    return (
        <form action="" className="flex flex-col gap-2" onSubmit={() => alert("hi")}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="text-purple-950 border-[1.5px] py-1 px-2 border-purple-50
                        outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="text-purple-950 border-[1.5px] py-1 px-2 border-purple-50
                        outline-none"
        />
        <input type="button" value="Subscribe" className="btn" />
      </form>
    );
};

export default NewsletterForm;