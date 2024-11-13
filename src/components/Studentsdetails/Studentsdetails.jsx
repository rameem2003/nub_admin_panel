import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import { FaFacebook } from "react-icons/fa6";
export default function Studentsdetails() {
    const [stddata, setStddata] = useState({})
    const data = useLoaderData();
    const params = useParams()
    const Id = parseInt(params.id);

const {image,name,stdId,email,birthdate,bloodGroup,fatherName,motherName,phone,currentAddress,permanentAddress,facebookId} = stddata;

    useEffect(()=>{
        const studentData = data.find((s)=>s.id == Id )
        setStddata(studentData);
    },[data,Id])
    
    
  return (

    <div>
        <div className="bg-white flex flex-col items-center justify-center">
            <div className="my-5">
                <h1 className="text-4xl font-bold">Student Details</h1>
            </div>
            <div className="flex gap-5 items-center justify-center bg-gray-100 p-5 rounded-2xl mb-8">
                <div className=" ">
                    <img className="w-44 rounded-2xl" src={image} alt="" />
                </div>
                <div className="">
                    <h1 className="text-xl font-bold">Name: {name}</h1>
                    <p>Student Id: {stdId}</p>
                    <p>Fathers Name: {fatherName}</p>
                    <p>Mothers Name: {motherName}</p>
                    <p>Date of Birth: {birthdate}</p>
                    <p>Blood Group: {bloodGroup}</p>
                    <p>Present Address: {currentAddress}</p>
                    <p>Permenent Address: {permanentAddress}</p>
                    <p>Phone No: {phone}</p>
                    <p>E-mail: {email}</p>
                    <p className="mb-1">Reach Me:-</p>
                    <Link to={facebookId} target="blank">
                        <button className="px-2  rounded-2xl border-2 bg-blue-600 text-gray-100 flex items-center gap-2">Facebook <FaFacebook/></button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
