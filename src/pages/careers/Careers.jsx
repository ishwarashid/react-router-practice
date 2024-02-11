import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

  const careers = useLoaderData();
  return (
    <div className="careers">
        {careers.map( (career) => {
            return (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            )
        })}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
    try {
        const res = await fetch('http://localhost:3000/careers');
        if(res.ok){
            return res.json();
        } else {
            throw new Error("Could not fetch list of careers")
        }

    } catch(e) {
        console.error("Error fetching careers:", e);
        throw new Error("Could not fetch list of careers")
    }

}



