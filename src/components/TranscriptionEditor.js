import TranscriptionItem from "@/components/TranscriptionItem";
import { useState } from "react";
import axios from "axios";
import SparklesIcon from "./SparklesIcon";

export default function TranscriptionEditor({
  awsTranscriptionItems,
  setAwsTranscriptionItems,
}) {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const updateTranscriptionItem = (index, prop, ev) => {
    const newItems = [...awsTranscriptionItems];
    newItems[index] = {
      ...newItems[index],
      [prop]: ev.target.value,
    };
    setAwsTranscriptionItems(newItems);
  };

  const extractContentWords = (items) => {
    return items
      .flatMap((item) => item.content.split(" "))
      .filter((word) => word.trim() !== "")
      .join(" ");
  };

  const summarizeText = async () => {
    const textToSummarize = extractContentWords(awsTranscriptionItems);
    setText(textToSummarize);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/",
        {
          text: textToSummarize,
          min_length: 100,
          max_length: 300,
        },
        {
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "tldrthis.p.rapidapi.com",
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          },
        }
      );

      setSummary(response.data.summary || "");
    } catch (error) {
      console.error("Error summarizing text:", error);
      setSummary("Something went wrong while generating the summary.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-3 sticky top-0 bg-black/80 p-2 rounded-md">
        <div>Start</div>
        <div>End</div>
        <div>Content</div>
      </div>

      {/* Transcription Items */}
      {awsTranscriptionItems.length > 0 && (
        <div className="h-48 sm:h-auto overflow-y-scroll sm:overflow-auto">
          {awsTranscriptionItems.map((item, index) => (
            <TranscriptionItem
              key={index}
              handleStartTimeChange={(ev) =>
                updateTranscriptionItem(index, "start_time", ev)
              }
              handleEndTimeChange={(ev) =>
                updateTranscriptionItem(index, "end_time", ev)
              }
              handleContentChange={(ev) =>
                updateTranscriptionItem(index, "content", ev)
              }
              item={item}
            />
          ))}
        </div>
      )}

      {/* Summary Section */}
      <div className="flex md:flex-row flex-col justify-between mt-4 w-full gap-4">
        <div className="md:w-2/5 w-full">
          <label className="text-sm font-medium">
            Extracted Text
          </label>
          <textarea
            rows={14}
            className="w-full text-black text-base p-4 rounded-md focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={summarizeText}
            disabled={loading}
            className="rounded-full px-5 py-3 inline-flex gap-2 cursor-pointer"
            style={{
              background: "#0d1127",
              border: "2px solid #5978F3ca",
              opacity: loading ? 0.6 : 1,
            }}
          >
            <SparklesIcon />
            <span>{loading ? "Summarizing..." : "Summarize"}</span>
          </button>
        </div>

        <div className="md:w-2/5 w-full">
          <label className="text-sm font-medium">
            Summary
          </label>
          <textarea
            readOnly
            rows={14}
            className="w-full text-black text-base p-4 rounded-md focus:outline-none"
            value={summary}
          />
        </div>
      </div>
    </>
  );
}