import imageTransform from "../assets/images/mobile/image-transform.jpg";
import imageTransformLg from "../assets/images/desktop/image-transform.jpg";
import imageStandout from "../assets/images/mobile/image-stand-out.jpg";
import imageStandoutLg from "../assets/images/desktop/image-stand-out.jpg";

export interface Props {
  width: number;
  breakpoint: number;
}

const ImageGrid = ({ width, breakpoint }) => {
  return (
    <section className="flex lg:grid lg:grid-cols-2 lg:grid-rows-auto flex-col">
      {width >= breakpoint ? (
        <img
          src={imageTransformLg}
          alt="egg with yellow background"
          className="w-[100%] h-[100%] col-start-2 mb-8"
        />
      ) : (
        <img
          src={imageTransform}
          alt="egg with yellow background"
          className="w-[100%] mb-8"
        />
      )}
      <div className="flex flex-col lg:row-start-1 text-center p-4">
        <span className="font-serif mb-4 text-[32px] font-black">
          Transform your brand
        </span>
        <p className="mb-8 font-sans text-[18px] text-[#808397]">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <span className="uppercase w-[137px] self-center font-serif font-black text-md border-b-4 border-[#FAD400] mb-8">
          learn more
        </span>
      </div>
      {width >= breakpoint ? (
        <img
          src={imageStandoutLg}
          alt="pink cup with pink background"
          className="w-[100%] h-[100%] mb-8"
        />
      ) : (
        <img
          src={imageStandout}
          alt="pink cup with pink background"
          className="w-[100%] mb-8"
        />
      )}
      <div className="flex flex-col text-center p-4">
        <span className="font-serif mb-4 text-[32px] font-black">
          Stand out to the right audience
        </span>
        <p className="mb-8 font-sans text-[18px] text-[#808397]">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <span className="uppercase w-[137px] self-center font-serif font-black text-md border-b-4 border-[#FE7766] mb-8">
          learn more
        </span>
      </div>
      {width >= breakpoint ? (
        <div className="relative bg-[url('./assets/images/desktop/image-graphic-design.jpg')] w-[100%] h-[600px] bg-cover text-center">
          <span className="absolute top-[60%] left-[30%] font-serif text-[28px] font-black text-[#24554A]">
            Graphic Design
          </span>
          <p className="absolute top-[75%] font-sans text-[18px] text-[#24554A] font-medium tracking-[-0.11px]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      ) : (
        <div className="relative bg-[url('./assets/images/mobile/image-graphic-design.jpg')] h-[600px] bg-cover text-center p-4">
          <span className="absolute top-96 left-[22%] font-serif text-[28px] font-black text-[#24554A]">
            Graphic Design
          </span>
          <p className="absolute top-[460px] font-sans text-[18px] text-[#24554A] font-medium tracking-[-0.11px]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      )}
      {width >= breakpoint ? (
        <div className="relative bg-[url('./assets/images/desktop/image-photography.jpg')] w-[100%] h-[600px] bg-cover text-center">
          <span className="absolute top-[60%] left-[35%] font-serif text-[28px] font-black text-[#052C3B]">
            Photography
          </span>
          <p className="absolute top-[75%] font-sans text-[18px] text-[#052C3B] font-medium tracking-[-0.11px]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      ) : (
        <div className="relative bg-[url('./assets/images/mobile/image-photography.jpg')] h-[600px] bg-cover text-center p-4">
          <span className="absolute top-96 left-[25%] font-serif text-[28px] font-black text-[#052C3B]">
            Photography
          </span>
          <p className="absolute top-[460px] font-sans text-[18px] text-[#052C3B] font-medium tracking-[-0.11px]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      )}
    </section>
  );
};

export default ImageGrid;
