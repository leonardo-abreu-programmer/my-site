import Image from 'next/image'

export default function Gym() {
  return (
    <>
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start">
          <h2 className="pb-6">Gym</h2>
          <p>
            Going to the gym has become a very important part of my life, a place of socializing for people who strive for a better and healthier lifestyle through effort. <br/><br/>
            There is no easy way to achieve gains, there are no better or worse ones, there are only those who are more hardworking and consistent. <br/><br/>
            This lifestyle demands more effort, is more painful, and requires more energy, but seeing how my body improves in terms of strength and aesthetics is priceless.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-start xl:px-12">
          <Image 
            src="/images/gym.jpg" 
            width={500}
            height={500}
            alt="Arnold pose picture" 
            className="rounded"
          />
          <Image 
            src="/images/zyzz.jpg" 
            width={500}
            height={500}
            alt="Zyzz pose picture" 
            className="rounded"
          />
          <div className="flex items-end justify-end">
            <Image 
              src="/images/lean.jpg"
              width={500}
              height={500}
              alt="LeanBeefPatty pose picture" 
              className="rounded"
            />
          </div>
        </div>
      </div>
    </>
  )
}
