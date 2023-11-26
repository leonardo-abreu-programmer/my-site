import Project from "../ui/project";

export default function Page() {
  return (
    <div className="w-full">
      <div className="grid xl:grid-cols-3 gap-4">
        <Project title='Tripmaster' description='A website to help you building your trip' github='https://github.com/AbreuDProgrammer/Tripmaster' link='http://tripmaster.lwoabreu.com'/>
      </div>
    </div>
  )
}
