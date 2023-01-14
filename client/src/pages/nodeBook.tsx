import OurClasses from '@/scenes/ourClasses'
import React, {useState, useEffect} from 'react'
import {getAppoints, TAppoint} from "@/api/getAppoints";
import { createAppoint } from "@/api/createAppoint";
import { Link } from "react-router-dom";
import { deleteAppoint } from "@/api/deleteAppoint";
import formImg from '@/assets/formControl.jpg';
import ActionButton from '@/shared/ActionButton';

type Props = {}

const Book = (props: Props) => {
  const [appoints, setAppoints] = useState<TAppoint[]>([]);
    const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string | number>("")
  const [address, setAddress] = useState<string>(";")
  const [result, setResult] = useState<object>({})


  async function handleCreateAppoint(e: React.FormEvent) {
    e.preventDefault();
    const appoint = await createAppoint(title, name, phone, address);
    setAppoints([...appoints, appoint]);
    setTitle("");
    setName("")
  }
  async function handleDeleteDeck(appointId: string) {
    await deleteAppoint(appointId);
    setAppoints(appoints.filter((appoint) => appoint._id !== appointId));
  }

  useEffect(() => {
    async function fetchAppoints() {
      const newAppoints = await getAppoints();
      setAppoints(newAppoints);
    }
    fetchAppoints();
  }, []);

  const inputStyle = `text=white my-2 border-x-4 rounded-lg bg-primary-100`;
  const labelStyle = `my-1 font-bold text-left font-montserrat text-primary-100`;

  return (
    <>
    <OurClasses />
    <h1 className='mx-auto text-center font-montserrat text-4xl text-primary-500'> my Appointment</h1>
   
   
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
          <div className='py-20 flex flex-col w-5/6  cpace-x-5 space-y-0
                          roundged-lg md:flex-row'>
                              <div className='rounded-lg md:w-1/2'>
                                <img src={formImg} className='rounded-lg' alt="form contol" />
                              </div>
                              <div className=' md:w-1/2'>
                              <form className=' flex flex-col w-full' onSubmit={handleCreateAppoint}>
                            <label className={labelStyle} htmlFor="appoint-title">Appoint Title</label>
                            
                            <input
                              id="appoint-title"
                              value={title}
                              placeholder='title'
                              className={inputStyle}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setTitle(e.target.value);
                              }}
                            />
                             <label className={labelStyle}  htmlFor="appoint-title">Appoint Name</label>
                             <input
                              id="appoint-title"
                              className={inputStyle}
                              value={name}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setName(e.target.value);
                              }}
                            />
                             <label className={labelStyle}   htmlFor="appoint-title">Appoint Phone</label>
                             <input
                              id="appoint-title"
                              className={inputStyle}
                              value={phone}

                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPhone(e.target.value)
                              }}
                            />
                             <label className={labelStyle}   htmlFor="appoint-title">Appoint Address</label>
                             <input
                              id="appoint-address"
                              value={address}
                              className={inputStyle}

                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setAddress(e.target.value);
                              }}
                            />
                                                <button className='  className="w-10 rounded-lg bg-secondary-500 text-white px-1 py-2 hover:bg-primary-500 hover:text-white"'>Create Appoint</button>
                        </form>
                              </div>
          </div>
      </div>
    </>
  )
}

export default Book