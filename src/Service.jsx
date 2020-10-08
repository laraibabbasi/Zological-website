import React from 'react';
import Card from './Card';
import Cdata from './Cdata';
import './services.css';
import web from '../src/img/1.jpg';
import S1 from '../src/img/s1.jpg';
import S2 from '../src/img/s2.jpg';
import S3 from '../src/img/s3.jpg';
import S4 from '../src/img/s4.jpg';
import S5 from '../src/img/s5.jpg';
import S6 from '../src/img/s6.jpg';



const Service = (props)=>{
    return(
        <>
        <div className="my-3">
            <h1 className="text-center">{props.name}</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    <Card src={S1} txt="Want to get to know about Wilds? Check out Our wild animals to get up-close with tigers ,lions, cheetahs." title="Wild Aminals" visit="https://www.nps.gov/glac/learn/education/upload/Wild_Animals_Wild_-Places.pdf" />

                    <Card src={S2} txt="Birds are the most abundant species on earth.Birds belongs to the vertebrates group. There are more than 9000." title="Birds Zone" visit="https://cfpub.epa.gov/watertrain/pdf/modules/Birds.pdf" />
                    
                    <Card src={S3} txt="The basic concept behind the AQUALIFE is to give people to relex and hava a good time all in one place." title="Aqua life" visit="https://spccfpstore1.blob.core.windows.net/digitallibrary-docs/files/75/75b60da59f30026c84d54bdde10f9f7c.pdf?sv=2015-12-11&sr=b&sig=5hxag%2BXTJIL2bIBZ9Tj%2FYE580leln3EZeD38AjKIRRw%3D&se=2021-04-06T14%3A10%3A53Z&sp=r&rscc=public%2C%20max-age%3D864000%2C%20max-stale%3D86400&rsct=application%2Fpdf&rscd=inline%3B%20filename%3D%22Pyle_93_MarineAquariumFishes.pdf%22"/>
                    <Card src={S4} txt="The response is overwhelming as the show not only features amazing leaps by dolphins but also fascinating performances by sea lions." title="Dolphin show" visit="https://onlinelibrary.wiley.com/doi/pdf/10.1002/zoo.21016" />
                    <Card src={S5} txt="For the saffty and care of all animals in our zoo." title="Animal Care Zone" visit="https://grants.nih.gov/grants/olaw/guide-for-the-care-and-use-of-laboratory-animals.pdf"/>
                    <Card src={S6} txt="To Get Our Membership Please fill the following details." title="Become a Member" />
                            {/* {
                                Cdata.map((val,ind)=>{
                                    return(
                                        <Card key={ind} src={val.imgsrc} title={val.title} />
                                    )
                                })
                            }
 */}




                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Service;