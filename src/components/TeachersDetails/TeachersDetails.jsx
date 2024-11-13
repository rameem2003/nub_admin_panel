import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function TeachersDetails() {
    const [tchdata, setTchdata] = useState({})
    const data = useLoaderData();
    const params = useParams()
    const Id = parseInt(params.id);

    useEffect(()=>{
        const techerData = data.find((s)=>s.id == Id )
        setTchdata(techerData);
    },[data,Id]);

    const {image,name,stdId,email,birthdate,bloodGroup,fatherName,motherName,phone,currentAddress,permanentAddress,facebookId} = tchdata;
  return (
    <div>
    <div className="bg-white flex flex-col items-center justify-center">
        <div className="my-5">
            <h1 className="text-4xl font-bold">Teacher Details</h1>
        </div>
       
    </div>
</div>
  )
}
