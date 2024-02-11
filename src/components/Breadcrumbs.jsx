import { Link, useLocation } from "react-router-dom";

export default function(){
    const fullPath = useLocation().pathname;
    let currentPath = ''
    const crumbs = fullPath.split("/")
                    .filter( crumb => crumb!=="")
                    .map( crumb => {
                        currentPath += "/" + crumb

                        return(

                            <div className="crumb" key={crumb}>
                                <Link to={currentPath}>{crumb}</Link>
                            </div>
                        )
                        
                    })
    return(
        <div className="breadcrumbs">{crumbs}</div>
    );
}