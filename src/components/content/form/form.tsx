import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import FormInput from "./input";
import { FormTextArea } from "./form-text-area";

export default function FormComponent() {
    return (
        <form className="form-container">
            <FormInput label="Name" type="text" id="name" placeholder="Rocket" icon={faUser}></FormInput>
            <FormInput label="Email" type="email" id="email" placeholder="rocket@groot.com" icon={faEnvelope}></FormInput>
            <FormTextArea message="..."/>
        </form>

    )
}
