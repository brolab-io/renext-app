import Button from "@/components/commons/Button";
import useStartPool from "@/hooks/program/useStartPool";
import { Fragment, useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiArrowUpTray } from "react-icons/hi2";
type Props = {
  pool: string;
  disabled?: boolean;
  withWhitelist?: boolean;
};
const ButtonStart: React.FC<Props> = ({
  pool,
  disabled,
  withWhitelist = false,
}) => {
  const { mutate, isLoading } = useStartPool(pool);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleStart = useCallback(() => {
    mutate(undefined);
  }, [mutate]);

  if (withWhitelist) {
    return (
      <>
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base text-center font-semibold leading-6 text-gray-900"
                        >
                          Upload Whitelist File
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="text-sm text-gray-500">
                            Choose your whitelist file to upload (.csv). <br />{" "}
                            Your whitelist file must contain the
                            &quot;Address&quot; columns as headers of first
                            collumn:
                          </div>

                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25">
                            <div className="mt-2 flex items-center gap-x-3">
                              <HiArrowUpTray
                                className="h-8 w-8 text-indigo-600"
                                aria-hidden="true"
                              />

                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
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
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <Button
                        disabled={!file || isLoading}
                        onClick={handleStart}
                        className="bg-[#21D969] text-black text-center !w-full"
                      >
                        Start Pool
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#21D969] text-black text-center !w-full"
        >
          Start Pool with Whitelist
        </Button>
      </>
    );
  }

  return (
    <Button $xl onClick={handleStart} disabled={disabled || isLoading}>
      Start Pool
    </Button>
  );
};

export default ButtonStart;
