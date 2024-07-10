/* eslint-disable no-unused-vars */
import React,{ useContext } from 'react'
import { Context } from '../../App'

const Past = () => {
  const [pro , setPro , da , setDA , bookmarked , setBookmarked] = useContext(Context)
  return (
    <div style={{width:'100vw',height:'70vh', display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px',marginBottom:'30px'}}>
          <h3 style={{textAlign:'center',fontWeight:'800',color:'lightgray'}}>We hope you enjoyed your previous journy</h3>
          <div style={{width:'60vw',height:'65vh',overflowX:'scroll',borderRadius:'10px',display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
          {
            (da.length > 0)?
                  da.sort((a, b) => Number(a.startDate) - Number(b.startDate)).map( item => {
                    const year = item.startDate.split("-")[0]
                    const month = item.startDate.split("-")[1]
                    const day = item.startDate.split("-")[2].split("T")[0]
                    const currentDate = new Date();
                    const tourDate = new Date(item.startDate)
                    if(pro.booked.includes(item._id) && (tourDate < currentDate)){
                      return (
                        <div key={item._id} className={item._id} style={{width:'60vw',height:'150px',paddingTop:'10px',paddingBottom:'10px',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#F6F5F2',boxShadow:'inset 0px 0px 5px  gray'}} >  
                        <img className={item._id} style={{borderRadius:'6px',marginLeft:'15px'}} src={item.image} width={120} height={120} />
                              <h5 className={item._id} style={{width:'200px',marginLeft:'-40px'}}>{item.place} <br/> {item.location}</h5>
                              <div className={item._id} style={{textAlign:'center',marginRight:'30px'}}>
                                <h6 className={item._id}>{day} / {month} / {year}</h6>
                                <h6 className={item._id}>For {item.duration} Days</h6>
                              </div>
                        </div>
                    )
                    }
                  })
                 : 
                 <div>
                      <h6>No Bookmarks to show</h6>
                 </div> 
            }
        </div>
    </div>
  )
}

export default Past