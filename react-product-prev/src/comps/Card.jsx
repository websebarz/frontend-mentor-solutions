function Card() {
  let width = window.innerWidth;
  return (
    <>
      {width >= 1024 ? (
        <div className="grid grid-col-4 grid-row-auto w-[600px] h-[450px] mt-[2em] bg-white rounded-lg">
          <img
            className="rounded-l-lg max-w-none h-[450px] bg-contain col-span-2"
            src="/imgs/image-product-desktop.jpg"
            alt="a bottle of perfume"
          />
          <div className="flex flex-col col-start-3">
            <div className="relative mt-[1em] p-[1em] col-start-2 row-start-1">
              <h3 className="absolute left-[1em] text-xs tracking-[0.30em] text-gray-500">
                PERFUME
              </h3>
              <h1 className="mt-[1em] text-3xl font-bold">
                Gabrielle Essence Eau de Parfum
              </h1>
              <p className="mt-[1em] text-gray-500">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
            </div>
            <div className="flex p-[1em] gap-4 col-start-2 row-start-1">
              <span className="text-4xl font-['Fraunces']">$149.99</span>
              <span className="self-center line-through text-gray-500">
                $169.99
              </span>
            </div>
            <div className="p-[1em] relative flex mb-[2em] col-start-2 row-start-1">
              <span className="absolute self-center left-[5em]">
                <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                    fill="#FFF"
                  />
                </svg>
              </span>
              <button className="text-white p-[0.5em] pt-[1em] pb-[1em] w-[100%] rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[100%] mt-[2em] bg-white rounded-lg">
          <img
            className="rounded-t-lg"
            src="/imgs/image-product-mobile.jpg"
            alt="a bottle of perfume"
          />
          <div className="relative mt-[1em] p-[1em]">
            <h3 className="absolute left-[1em] text-xs tracking-[0.30em] text-gray-500">
              PERFUME
            </h3>
            <h1 className="mt-[1em] text-3xl font-bold">
              Gabrielle Essence Eau de Parfum
            </h1>
            <p className="mt-[1em] text-gray-500">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="flex p-[1em] gap-4">
            <span className="text-4xl font-['Fraunces']">$149.99</span>
            <span className="self-center line-through text-gray-500">
              $169.99
            </span>
          </div>
          <div className="p-[1em] relative flex mb-[2em]">
            <span className="absolute self-center left-[6.5em]">
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
            </span>
            <button className="text-white p-[0.5em] pt-[1em] pb-[1em] w-[100%] rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
