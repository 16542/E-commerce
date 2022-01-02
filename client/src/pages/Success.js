import { useLocation } from "react-router"

const Success = () => {
    const Location = useLocation();
    console.log(Location)
    return (
        <div>
            successful
        </div>
    )
}

export default Success
