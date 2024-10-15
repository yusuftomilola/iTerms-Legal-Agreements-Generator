const steps = [
  {
    name: "Step 1",
    href: "#",
    status: "complete",
    icon: 1,
    text: "Choose Your Desired Policy ",
  },
  {
    name: "Step 2",
    href: "#",
    status: "complete",
    icon: 2,
    text: "Collaborate with our AI Assistant",
  },
  {
    name: "Step 3",
    href: "#",
    status: "complete",
    icon: 3,
    text: "Collect Your Legal Document",
  },
  {
    name: "Step 4",
    href: "#",
    status: "current",
    icon: 4,
    text: "Collect Your Legal Document",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProgressBar() {
  return (
    <nav aria-label="Progress flex gap-2">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-[1px] w-full bg-[#8770ff]" />
                </div>

                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-[#8770ff] z-10 bg-[#f1f3f6] text-[#8770FF] text-[12px]">
                  {step.icon}
                </span>

                <p className="absolute text-[12px] mt-[13px] leading-tight text-[#1D212A]">
                  {step.text}
                </p>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200  hidden" />
                </div>
                {/* <a
                  href="#"
                  aria-current="step"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                  />
                  <span className="sr-only">{step.name}</span>
                </a> */}
              </>
            ) : (
              ""
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
