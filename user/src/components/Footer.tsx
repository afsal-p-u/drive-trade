const Footer = () => {
  return (
    <div className="bg-primary px-[100px] pt-[70px]">
      <div className="pb-[70px] flex gap-16">
        <div className="flex gap-5 basis-3/5 justify-between">
          <FooterCategory
            item="Vehicle Type"
            list={["Sedan", "XUV", "Notchback", "Bus", "Hatchback"]}
          />
          <FooterCategory
            item="Our brands"
            list={[
              "Lamborgini",
              "Mazda",
              "Mitsubishi",
              "Keeinsegg",
              "Lexus",
              "Ford",
            ]}
          />
          <FooterCategory
            item="Useful links"
            list={["Home", "About us", "Blogs", "Our team", "Contact us"]}
          />
          <FooterCategory
            item="Extra"
            list={["Privacy policy", "Terms", "FAQ", "Conditions", "Support"]}
          />
        </div>

        <div className="basis-2/5 flex flex-col justify-between gap-5">
          <div className="">
            <p className="font-medium">Contact</p>

            <p className="text-sm text-light_gray mt-3">
              IND: +91 1839238347 58 Stree, 1300 Techopark Near by Router Market
            </p>

            <p className="text-sm text-light_gray mt-3">
              drivetradenew@gmail.com
            </p>
          </div>

          <div className="flex flex-col">
            <div className="">
              <p className="font-medium">Follow us</p>

              <div className="mt-3 flex gap-3 flex-wrap">
                <SocialButton name="Facebook" />
                <SocialButton name="Instagram" />
                <SocialButton name="Linkedln" />
                <SocialButton name="Youtube" />
                <SocialButton name="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 flex items-center justify-center border-t-[1px]">
        <p className="text-xs font-medium text-light_gray">
          Copyright @ 2024. All rights reserved. Powered by{" "}
          <span className="text-secondary">DriveTrade</span>
        </p>
      </div>
    </div>
  );
};

const SocialButton = ({ name }: any) => {
  return (
    <button className="px-7 py-2 text-xs rounded-sm border-[1px] font-medium">
      {name}
    </button>
  );
};

const FooterCategory = ({ item, list }: any) => {
  return (
    <div className="flex flex-col gap-2">
      {item == "Extra" ? (
        <p className="font-medium opacity-0">{item}</p>
      ) : (
        <p className="font-medium">{item}</p>
      )}

      <div className="flex flex-col gap-2">
        {list?.map((item: any, i: any) => (
          <p className="text-sm text-light_gray" key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
