import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    return (
        <div className="">
            <p>{title}</p>
            {/* <h1>{styles}</h1> */}
        </div>
    )
} 

export default Button;