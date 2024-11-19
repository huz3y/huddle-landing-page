import Paragraph from "./paragraph";
import Button from "./button";
import Heading from "./heading";

function TextBox() {
  return (
    <div className="w-full space-y-6 px-9 text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:pr-20 md:text-left">
      <Heading>Build the community your fans will love</Heading>
      <Paragraph>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you genuine
        discussions. engage in genuine discussion.
      </Paragraph>
      <Button>Register</Button>
    </div>
  );
}

export default TextBox;
