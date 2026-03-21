import { Field, FieldDescription, FieldLabel, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Beams from "../Background/Beams";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "@/lib/axios"; // Axios instance with interceptor

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/signup", { username, password });
      const { token, user } = res.data;

      // Save token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", user.username);

      alert(`Account created for ${user.username}`);
      navigate("/dashboard"); // protected route
    } catch (err: any) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="relative min-h-dvh h-fit overflow-hidden bg-linear-to-r from-transparent via-background/70 to-background">
      <div className="absolute inset-0 -z-10">
        <Beams />
      </div>
      <div className="p-4 absolute top-0 left-0 w-full flex items-center justify-between gap-2.5">
        <div className="text-3xl">Mapt</div>
        <Button variant={"secondary"} onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
      <div className="min-h-dvh h-full p-4 w-full flex items-end flex-col">
        <form
          className="grow h-full p-4 sm:px-15 w-full max-w-120 flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
              <Input
                id="fieldgroup-name"
                placeholder="Rahul Singh"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-email">
                Email<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FieldDescription>
                We'll send updates to this address.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-field-password">
                Password<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                id="input-field-password"
                type="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
  );
}

export default Signup;