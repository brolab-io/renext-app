"use client";
import { FiChevronRight, FiX } from "react-icons/fi";
import Button from "../../Button";
import WhitelistModalStyleWrapper from "./WhitelistModal.style";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { isValidPublicKey } from "@/utils/network.util";
import { WhitelistModalProps } from ".";

export const WhitelistModal: React.FC<WhitelistModalProps> = ({
  setIsOpen,
}) => {
  const ref_input = useRef<HTMLInputElement>(null);
  const [csvFile, setFile] = useState<File | null>(null);
  const [whitelist, setWhitelist] = useState<string[]>([]);

  const processCsvFile = useCallback(async () => {
    if (!csvFile) {
      toast.error("Please choose a file to process.");
      return;
    }

    const text = await csvFile.text();

    const lines = text.split("\n");

    // 5. map through all the lines and split each line by comma.
    const _data = lines.map((line) => line.split(",").map((col) => col.trim()));

    // 6. Since first row contains headers, we will remove the first row from data.
    _data.shift();
    const temp = _data
      .filter((item) => item[0].length > 36)
      .map((item) => item[0]);
    console.log({ address: temp });
    // check array include valid address
    const validAddress = temp.every((item) => {
      return isValidPublicKey(item);
    });
    // setFile(null);
    ref_input.current!.value = "";
    if (!validAddress) {
      return Promise.reject(new Error("Invalid address in CSV file."));
    }
    setWhitelist(temp);
    return temp;
  }, [csvFile]);

  useEffect(() => {
    if (csvFile) {
      processCsvFile();
    }
  }, [csvFile, processCsvFile]);

  const handlerStartPool = useCallback(async () => {
    if (!csvFile) {
      toast.error("Please choose a file to process.");
      return;
    }
    try {
      console.log({ whitelist });
      //   startPool(csv);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsOpen(false);
    }
  }, [csvFile, setIsOpen]);

  return (
    <WhitelistModalStyleWrapper className="modal_overlay">
      <div className="mint_modal_box">
        <div className="mint_modal_content">
          <div className="modal_header">
            <h2>Upload Whitelist File</h2>
            <p>
              Choose your whitelist file to upload (.csv). <br /> Your whitelist
              file must contain the &quot;Address&quot; columns as headers of
              first collumn:
            </p>
            <button onClick={() => setIsOpen(false)}>
              <FiX />
            </button>
          </div>
          <div className="modal_body">
            <div
              className="wallet_list"
              onClick={(e) => {
                e.preventDefault();
                ref_input.current?.click();
              }}
            >
              <div>
                Upload a file
                <span>
                  <FiChevronRight />
                </span>
              </div>
            </div>
            {whitelist.length > 0 && (
              <div className="text-right text-sm font-thin italic">
                {whitelist.length} addresses valid
              </div>
            )}
          </div>
          <div className="mt-5 self-end">
            <Button $lg onClick={handlerStartPool} disabled={!whitelist.length}>
              Start Project
            </Button>
            <div className="social_links"></div>
          </div>
          <input
            ref={ref_input}
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            accept=".csv"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
      </div>
    </WhitelistModalStyleWrapper>
  );
};
