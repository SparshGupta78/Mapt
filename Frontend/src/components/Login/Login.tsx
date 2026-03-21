import { Field, FieldDescription, FieldLabel, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Beams from "../Background/Beams"
import { useNavigate } from "react-router-dom"
import useAuthAPI from "@/services/auth.service"

function Login() {

    const { signInAPI } = useAuthAPI()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        await signInAPI({
            username: formData.get("username") as string,
            password: formData.get("password") as string,
        })
    }

    return (
        <div className="relative min-h-dvh h-fit overflow-hidden bg-linear-to-r from-transparent via-background/70 to-background">
            <div className="absolute inset-0 -z-10">
                <Beams />
            </div>
            <div className="p-4 absolute top-0 left-0 w-full flex items-center justify-between gap-2.5">
                <div className="text-3xl">Mapt</div>
                <Button variant={"secondary"} onClick={() => navigate("/signup")}>
                    Signup
                </Button>
            </div>
            <div className="min-h-dvh h-full p-4 w-full flex items-end flex-col">
                <form
                    className="grow h-full p-4 sm:px-15 w-full max-w-120 flex flex-col justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">Username</FieldLabel>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter your username"
                            />
                            <FieldDescription>
                                Enter your account username.
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">
                                Password <span className="text-destructive">*</span>
                            </FieldLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <FieldDescription>
                                Enter your account password.
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