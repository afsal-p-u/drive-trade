import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary px-[100px] pt-[70px]'>
      <div className="pb-[70px] flex gap-16">
        <div className="flex gap-5 basis-3/5 justify-between">
            <div className="flex flex-col gap-2">
                <p className='font-medium'>Vehicle Type</p>

                <div className="flex flex-col gap-2">
                    <p className='text-sm text-light_gray'>Sedan</p>
                    <p className='text-sm text-light_gray'>XUV</p>
                    <p className='text-sm text-light_gray'>Hybrid</p>
                    <p className='text-sm text-light_gray'>Electric</p>
                    <p className='text-sm text-light_gray'>Toyota</p>
                    <p className='text-sm text-light_gray'>Ferrari</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className='font-medium'>Our brand</p>

                <div className="flex flex-col gap-2">
                    <p className='text-sm text-light_gray'>Lamborgini</p>
                    <p className='text-sm text-light_gray'>Mazda</p>
                    <p className='text-sm text-light_gray'>Mitsubishi</p>
                    <p className='text-sm text-light_gray'>Koeingsegg</p>
                    <p className='text-sm text-light_gray'>Lexus</p>
                    <p className='text-sm text-light_gray'>Ford</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className='font-medium'>Useful links</p>

                <div className="flex flex-col gap-2">
                    <p className='text-sm text-light_gray'>Home</p>
                    <p className='text-sm text-light_gray'>About Us</p>
                    <p className='text-sm text-light_gray'>Blogs</p>
                    <p className='text-sm text-light_gray'>Our Team</p>
                    <p className='text-sm text-light_gray'>Contact Us</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className='font-medium opacity-0'>Others</p>

                <div className="flex flex-col gap-2">
                    <p className='text-sm text-light_gray'>Privacy Policy</p>
                    <p className='text-sm text-light_gray'>Terms</p>
                    <p className='text-sm text-light_gray'>FAQ</p>
                    <p className='text-sm text-light_gray'>Conditions</p>
                    <p className='text-sm text-light_gray'>Support</p>
                </div>
            </div>
        </div>

        <div className="basis-2/5 flex flex-col justify-between gap-5">
            <div className="">
                <p className='font-medium'>Contact</p>

                <p className='text-sm text-light_gray mt-3'>IND: +91 1839238347 58 Stree, 1300 Techopark Near by Router Market</p>

                <p className='text-sm text-light_gray mt-3'>drivetradenew@gmail.com</p>
            </div>
            
            <div className="flex flex-col">
                <div className="">
                    <p className='font-medium'>Follow us</p>

                    <div className="mt-3 flex gap-3 flex-wrap">
                        <button className='px-7 py-2 text-xs rounded-sm border-[1px] font-medium'>
                            Facebook
                        </button>

                        <button className='px-7 py-2 text-xs rounded-sm border-[1px] font-medium'>
                            Instagram
                        </button>

                        <button className='px-7 py-2 text-xs rounded-sm border-[1px] font-medium'>
                            Linkedn
                        </button>

                        <button className='px-7 py-2 text-xs rounded-sm border-[1px] font-medium'>
                            Youtube
                        </button>

                        <button className='px-7 py-2 text-xs rounded-sm border-[1px] font-medium'>
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="py-5 flex items-center justify-center border-t-[1px]">
        <p className='text-xs font-medium text-light_gray'>Copyright @ 2024. All rights reserved. Powered by <span className='text-secondary'>DriveTrade</span></p>
      </div>
    </div>
  )
}

export default Footer
