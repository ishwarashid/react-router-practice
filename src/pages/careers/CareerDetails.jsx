import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails(){
    const { id } = useParams;
    const careerDetails = useLoaderData();

    return(
        <div className="career-details">
            <h2>Career Details for {careerDetails.title}</h2>
            <p>Starting salary: {careerDetails.salary}</p>
            <p>Location: {careerDetails.location}</p>
            <div className="details">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
      </div>
    )
}

// loader function

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const requestedCareer = await fetch("http://localhost:3000/careers/" + id)
    
    if(!requestedCareer.ok){
        throw new Error('Could not find that career.')
    }
    return requestedCareer.json()
}