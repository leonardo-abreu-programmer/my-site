import Image from 'next/image'

export default function Me() {
  return (
    <>
      <div className="grid justify-items-center gap-4 xl:grid-cols-3 w-full">
        <Image 
          src="/images/alsome.jpg" 
          width={500}
          height={500}
          alt="Me again" 
          className="rounded"
        />
        <div className="flex flex-col items-start justify-start xl:px-12 xl:col-span-2">
          <h2 className="pb-6">Hello World</h2>
          <p>
            My name is Leonardo. I am a programmer from São Paulo, Brazil, currently living in Portugal and completing my graduation.<br/><br/>
            I have a job at an influential programming company in Portugal, and I am planning to continue my studies.<br/><br/>
            I am familiar with several programmingges, and I can easily learn new ones. I enjoy learning new design patterns and implementing them in my projects.<br/><br/>
            In the future, I hope to enhance my programming knowledge through work experience, and I am also planning to move to another country to improve my English skills.<br/><br/>
          </p>
        </div>
      </div>
    </>
  )
}
