import { Field, FieldDescription, FieldLabel, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Beams from "../Background/Beams"
import { useNavigate } from "react-router-dom"

function Signup() {

    const navigate = useNavigate()

    const handleSubmit = ()=>{

    }

    return (
        <div className="relative min-h-dvh h-fit overflow-hidden bg-linear-to-r from-transparent via-background/70 to-background">
            <div className="absolute inset-0 -z-10">
            <Beams />
            </div>
            <div className="p-4 absolute top-0 left-0 w-full flex items-center justify-between gap-2.5">
                <div className="text-3xl">Mapt</div>
                <Button className="" variant={"secondary"} onClick={()=>(navigate("/login"))}>
                    Login
                </Button>
            </div>
            <div className="min-h-dvh h-full p-4 w-full flex items-end flex-col">
                <form className="grow h-full p-4 sm:px-15 w-full max-w-120 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <FieldGroup className="">
                        <Field>
                            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                            <Input id="fieldgroup-name" placeholder="Rahul Singh" />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="fieldgroup-email">Email
                                <span className="text-destructive">*</span>
                            </FieldLabel>
                            <Input
                                id="fieldgroup-email"
                                type="email"
                                placeholder="name@example.com"
                                required
                            />
                            <FieldDescription>
                                We&apos;ll send updates to this address.
                            </FieldDescription>
                        </Field>

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

export default Signup