import Heading from "../../components/Shared/Heading"

const Header = ({ room }) => {


    return (
        <>
            <Heading title={room.title} subtitle={room.location} />
            <div className='w-full overflow-hidden rounded-xl'>
                <div className="grid grid-cols-9 grid-rows-2 gap-[2px] md:gap-[3px] h-[50vh]">
                    {
                        room.images.map(imageUrl => <img
                            key={imageUrl}
                            src={imageUrl}
                            className={`h-full bg-contain w-[100%] center ${imageUrl == room.images[2] ? "rounded-tr-[5px]" : ""} ${imageUrl == room.images[4] && "rounded-br-[5px]"} ${imageUrl == room.images[0] ? 'col-span-5 row-span-2 rounded-l-[5px]' : 'col-span-2 row-span-1'}`}
                        ></img>)
                    }
                </div>
            </div>
        </>
    )
}

export default Header