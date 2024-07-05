import React, { useEffect, useState } from "react"
import { usePostEmailList } from "../hooks/query"
import { SuccessModal } from "./UI/SuccessModal"
import { FailureModal } from "./UI/FailureModal"
import { Loader } from "./UI/Loader"

const InputWaitlist: React.FC = () => {
  const postEmailList = usePostEmailList()
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (validateEmail(email)) {
      setEmailError(""); // Clear error message if the email is valid
    }
  }, [email]); // Depend on email state to trigger

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
    return re.test(email);
  };

  const handleJoinWaitlist = () => {
    if (validateEmail(email)) {
      postEmailList.mutate(email);
      setEmailError(""); // Clear error message if the email is valid
    } else {
      setEmailError("Please enter a valid email address."); // Set error message
    }
  };

  return (
    <>
      {postEmailList.isSuccess && (
        <SuccessModal
          mainMessage="subscribed!"
          subMessage="you're in the waitlist! we'll email you with updates"
        />
      )}
      {postEmailList.isError && <FailureModal />}
      {postEmailList.isPending ? (
        <Loader />
      ) : (
        <>
          <input
            type="email"
            placeholder="your email"
            className="mt-4 px-4 py-2 border rounded-lg text-lg text-center focus:border-indigo-300 focus:outline-none"
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
            {emailError && <p className="text-red-500 text-sm mt-2 text-center">{emailError}</p>} {/* Display error message */}
          <button
            className="mt-4 ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-lg"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            onClick={handleJoinWaitlist}
          >
            join the waitlist
          </button>
        </>
      )}
    </>
  )
}

export default InputWaitlist
