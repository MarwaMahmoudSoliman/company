import PersonalPapers from '../../components/PersonalPapers'
import SidbarUser from '../../components/ٍSidbar/SidbarUser'

function personalPage() {
  return (
    <div className="col-12 m-auto d-flex">


    <div className="d-none d-lg-block">
     <SidbarUser/>
    </div>



   <div className="col-12 col-lg-9 py-4">
     <PersonalPapers/>
   </div>

   </div>
)

}

export default personalPage