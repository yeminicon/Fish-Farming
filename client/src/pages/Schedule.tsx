import Background from '@/scenes/background'
import Benefits from '@/scenes/benefits'
import React, {useState, useEffect} from 'react'
import {getAppoints, TAppoint} from "@/api/getAppoints";
import { createAppoint } from "@/api/createAppoint";
import { Link } from "react-router-dom";
import { deleteAppoint } from "@/api/deleteAppoint";


type Props = {}


const Schedule = (props: Props) => {

  
  return (
   <>
    <Background />
   

   </>
  )
  }

export default Schedule;