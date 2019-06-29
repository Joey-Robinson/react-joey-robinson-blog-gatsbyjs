import React from "react"
import Typed from "react-typed"

const TypingHome = () => (
  <div className="home__typing">
    <h1>
      Hi! I'm Joey, I'm a&nbsp;
      <Typed
        strings={[
          "Develoepr",
          "Developer.",
          "(Poor) Writer.",
          "Reader.",
          "Person.",
          "Geek.",
          "Nerd.",
          "One Piece Fanatic.",
        ]}
        typeSpeed={90}
        backSpeed={110}
        backDelay={1000}
        loop
      />
    </h1>{" "}
  </div>
)

export default TypingHome
