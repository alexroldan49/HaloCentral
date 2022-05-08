import haloLogo from "../images/Halo-Logo.png"
import HaloRing from "../images/HaloRing.png"


function HaloCentralLogo(){

    return(
        <div className="halo-central">
        <img className="halo-ring" src={HaloRing} />
        <img className="halo-logo" src={haloLogo} />
        <p>CENTRAL</p>
    </div>
    )
} export default HaloCentralLogo