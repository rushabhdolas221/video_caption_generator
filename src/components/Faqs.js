import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(1)}>
          What are captions?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          Captions are text displayed at the bottom of a video that transcribes spoken content to improve accessibility and understanding.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(2)}>
          How do you auto-generate captions online?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          Upload your video, and the system will automatically convert speech to text and add subtitles to your video.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(3)}>
          How can I download the subtitled video?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          After captions are generated and edited, you can download the final subtitled video using the download button.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(4)}>
          Does the tool provide video summaries?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          Yes, summaries can be generated based on the content of the uploaded video.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(5)}>
          Is the service free?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          A free plan may be available with limited features. Additional features may require a paid plan.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(6)}>
          Can I customize the captions?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          Yes. You can edit the caption text, adjust timestamps, and customize styling such as font and appearance.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7} icon={<Icon id={7} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 py-4">
        <AccordionHeader onClick={() => handleOpen(7)}>
          Can I use the service offline?
        </AccordionHeader>
        <AccordionBody className="mt-4 text-justify text-lg font-normal">
          No. An internet connection is required for the service to function.
        </AccordionBody>
      </Accordion>
    </>
  );
}