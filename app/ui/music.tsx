import Image from 'next/image'

export default function Music() {
  return (
    <div className="grid xl:grid-cols-2 gap-4">
        <Image 
          src="/images/music.jpg"
          width={700}
          height={700}
          alt="Pulse show" 
          className="rounded-xl"
        />
        <div className="order-first xl:order-last xl:px-12">
          <h2 className="pb-6">Music</h2>
          <p>
            Music has been an important part of my life since forever. <br/><br/>
            I grew up listening to classNameic Brazilian and foreign music. Wherever I go, I carry headphones with me and several downloaded songs. <br/><br/>
            My favorite music genres are pop, rock, and jazz, and almost anything that originates from them. I have an open mind to new bands and new styles. <br/><br/>
            The Weeknd, Lana Del Rey, Pink Floyd, The Alan Parsons Project, Tyler, The Creator, and Arctic Monkeys are always among the most played songs of the day.
          </p>
        </div>
      </div>
  )
}
