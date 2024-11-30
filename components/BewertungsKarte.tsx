import { FaMessage } from "react-icons/fa6";


interface TestimonialProps {
  name: string;
  review: string;
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <div className="bewertungbg backdrop-blur-lg p-10  text-white cursor-pointer flex flex-col text-center gap-5 border-2 border-white rounded-lg">
      <div className="flex justify-center">
        <FaMessage className="bg-black border-2 border-black text-white p-1 text-3xl rounded-md" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="drop-shadow-lg">{testimonial.name}</span>
      </div>
      <p className="font-light drop-shadow-2xl">{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;