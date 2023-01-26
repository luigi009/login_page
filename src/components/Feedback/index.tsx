import React from "react";
import * as I from "./interfaces";
import { feedbackTypes } from "./const";
import Link from "next/link";
import Image from "next/image";

function index({ type, show, onClose, userName }: I.FeedbackProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`${show ? "block" : "hidden"} relative z-10`}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                    type === "error" ? "bg-red-100" : "bg-emerald-100"
                  }  sm:mx-0 sm:h-10 sm:w-10`}
                >
                  <Image
                    width={30}
                    height={30}
                    src={feedbackTypes[type].iconSrc}
                    alt={feedbackTypes[type].iconAlt}
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 my-4 text-center">
                    {feedbackTypes[type].title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 text-center">
                      {feedbackTypes[type].paragraph}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center mt-4">
                {type === "error" && (
                  <button
                    onClick={handleClose}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 focus:ring-red-500 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ease-in-out duration-300"
                  >
                    {feedbackTypes[type].buttonText}
                  </button>
                )}
                {type === "success" && (
                  <Link
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ease-in-out duration-300"
                    href={{
                      pathname: "/User/[user]",
                      query: { user: userName() },
                    }}
                  >
                    {feedbackTypes[type].buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
