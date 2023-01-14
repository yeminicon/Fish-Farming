import Background from '@/scenes/background'
import Benefits from '@/scenes/benefits'
import React, {useState, useEffect} from 'react'
import {getAppoints, TAppoint} from "@/api/getAppoints";
import { createAppoint } from "@/api/createAppoint";
import { Link } from "react-router-dom";
import { deleteAppoint } from "@/api/deleteAppoint";


type Props = {}


const Schedule = (props: Props) => {
   const [appoints, setAppoints] = useState<TAppoint[]>([]);

    useEffect(() => {
    async function fetchAppoints() {
      const newAppoints = await getAppoints();
      setAppoints(newAppoints);
    }
    fetchAppoints();
  }, []);
  async function handleDeleteDeck(appointId: string) {
    await deleteAppoint(appointId);
    setAppoints(appoints.filter((appoint) => appoint._id !== appointId));
  }
  return (
   <>
    <Background />
    <div className='container mx-auto'>
    <table className="table-auto container">
                  <thead>
                      <tr className=''>
                            <th className='w-[250px] text-black '>id</th>
                            <th className='w-[250px] text-black '>title</th>
                            <th className='w-[250px] text-black '>name</th>
                            <th className='w-[250px] text-black '>Phone no</th>
                            <th className='w-[250px] text-black '>Address</th>
                            <th className='w-[250px] text-black '>delete</th>
                         </tr>
                         </thead>
                       
                       {appoints.map((appoint) => (
                        <tbody>
                            
                             
                            <tr key={appoint._id}>
                                
                              <td className='w-[250px] text-black '>{appoint._id}</td>
                               
                                
                             <td className='w-[250px] text-black '>{appoint.title}
                          
                                    {/* <div className=''>
                                      <Link to={`appoints/${appoint._id}`}></Link>
                                      </div> */}
                                      </td>
                                      <td className='w-[250px] text-black'>{appoint.name}</td>
                                      <td className='w-[250px] text-black'>{appoint.phone}</td>
                                      <td className='w-[250px] text-black'>{appoint.address}</td>
                                      <td  className='w-[250px] text-black ' onClick={() => handleDeleteDeck(appoint._id)}> Delete</td> 
                                      
                                    
                                      </tr> 
                                  </tbody>      
                           
                            ))}
                          
                          </table>
</div>

   </>
  )
}

export default Schedule;