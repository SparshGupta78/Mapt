import { Field, FieldDescription, FieldLabel, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Beams from "../Background/Beams"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const handleSubmit = ()=>{

    }

    return (
        <div className="flex flex-row h-dvh">
            <div className="relative bg-card w-3xl h-dvh overflow-hidden">
                <div className="fixed z-2 text-5xl font-semibold m-10">
                    Mapt
                </div>
                <div className="fixed z-2 text-5xl font-semibold mt-200">
                    Signup
                </div>
                <Beams />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/60 to-background pointer-events-none" />
            </div>
            <div className="bg-linear-to-r from-transparent to-background w-3xl">

                <Button className="mt-10 ml-150 bg-transparent" variant={"secondary"} onClick={()=>(navigate("/signup"))}>
                    Signup
                </Button>

                <form className="mt-45 ml-50 w-80" onSubmit={handleSubmit}>
                    <FieldGroup className="">
                        <Field>
                            <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
                            <Input
                                id="input-field-username"
                                type="text"
                                placeholder="Enter your username"
                            />
                            <FieldDescription>
                                Choose a unique username for your account.
                            </FieldDescription>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="input-field-password">Password
                                <span className="text-destructive">*</span>
                            </FieldLabel>
                            <Input
                                id="input-field-password"
                                type="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <FieldDescription>
                                Choose a strong password for your account.
                            </FieldDescription>
                        </Field>

                        <Field orientation="horizontal">
                            <Button type="reset" variant="outline">
                                Reset
                            </Button>
                            <Button type="submit">Submit</Button>
                        </Field>
                    </FieldGroup>
                </form>
            </div>
        </div>
    )
}

export default Login