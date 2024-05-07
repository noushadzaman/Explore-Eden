
const Footer = () => {
  return (
    <footer className='divide-y bg-[#FFE6E6] relative bottom-0 left-0'>
      <hr />
      <div className='py-7 px-[50px] text-[15px] text-gray-400 flex justify-between items-center'>
        <div className="flex flex-col gap-[2px]">
          <p className="text-sm">ADDRESS</p>
          <p>Dhaka, Bangladesh</p>
        </div>
        <hr className="border-[1px] h-[60px]" />
        <div className="flex flex-col gap-[2px]">
          <p className="text-sm">PHONE</p>
          <p>01534672418</p>
        </div>
        <hr className="border-[1px]  h-[60px]" />
        <div className="flex flex-col gap-[2px]">
          <p className="text-sm">EMAIL</p>
          <p>Noushadzaman333@gmail.com</p>
        </div>
        <hr className="border-[1px]  h-[60px]" />

        <div className="flex flex-col gap-[2px]">
          <p className="text-sm">SOCIAL</p>
          <div>
            <img src="" />
            <img src="" />
            <img src="" />
            <img src="" />
          </div>
        </div>
      </div>
      <hr className="border-[1px]" />
      <div className="px-[50px] flex items-center justify-between">
        <div className='py-6 text-sm text-center text-gray-400'>
          © 2023 Explore Eden Inc. All rights reserved.
        </div>
        <div className='py-6 text-sm text-center text-gray-400 flex items-center gap-5'>
          <a className="cursor-pointer">PRIVACY</a>
          <a className="cursor-pointer">TERMS OF USE</a>
          <a className="cursor-pointer">POLICY</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer