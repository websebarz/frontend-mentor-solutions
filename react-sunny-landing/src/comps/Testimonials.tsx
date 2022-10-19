import imageEmily from "../assets/images/image-emily.jpg";
import imageJennie from "../assets/images/image-jennie.jpg";
import imageThomas from "../assets/images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <section className="text-center lg:p-8">
      <h2 className="font-serif text-4 tracking-[4px] uppercase text-[#A7AAAD] mt-16 mb-8">
        Client Testimonials
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center p-4 mb-8">
          <img
            src={imageEmily}
            alt="emily r profile picture"
            className="w-[72px] rounded-full mb-8"
          />
          <p className="font-sans text-[18px] font-normal mb-8">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <span className="font-serif text-[18px] font-black mb-4">
            Emily R.
          </span>
          <span className="font-sans text-[#A7AAAD]">Marketing Director</span>
        </div>
        <div className="flex flex-col items-center p-4 mb-8">
          <img
            src={imageThomas}
            alt="emily r profile picture"
            className="w-[72px] rounded-full mb-8"
          />
          <p className="font-sans text-[18px] font-normal mb-8">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <span className="font-serif text-[18px] font-black mb-4">
            Thomas S.
          </span>
          <span className="font-sans text-[#A7AAAD]">
            Chief Operating Officer
          </span>
        </div>
        <div className="flex flex-col items-center p-4 mb-8">
          <img
            src={imageJennie}
            alt="emily r profile picture"
            className="w-[72px] rounded-full mb-8"
          />
          <p className="font-sans text-[18px] font-normal mb-8">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <span className="font-serif text-[18px] font-black mb-4">
            Jennie F.
          </span>
          <span className="font-sans text-[#A7AAAD]">Business Owner</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
