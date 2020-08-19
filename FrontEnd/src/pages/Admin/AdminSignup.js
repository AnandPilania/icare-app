import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../../assets/img/create-account-office.jpeg";
import ImageDark from "../../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Input, Label, Button } from "@windmill/react-ui";

function AdminSignUp() {
  const [values, setValues] = useState({
    employeeName: "ftest",
    email: "ftest@test.com",
    password: "password",
    confpassword: "password",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Employee Registration
              </h1>
              <Label>
                <span>Name</span>
                <Input
                  className="mt-1"
                  type="text"
                  value={values.employeeName}
                  onChange={handleChange("employeeName")}
                />
              </Label>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder=""
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  type="password"
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input
                  className="mt-1"
                  type="password"
                  value={values.confpassword}
                  onChange={handleChange("confpassword")}
                />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button tag={Link} to="/AdminSignUp" block className="mt-4">
                Create account
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/admin/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
