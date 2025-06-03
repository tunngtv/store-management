import React from "react";

function Login() {
    return (
        <>
            <header className="app-header transition-content sticky top-0 z-20 flex h-[65px] shrink-0 items-center justify-between border-b border-gray-200 bg-white/80 px-(--margin-x) backdrop-blur-sm backdrop-saturate-150 dark:border-dark-600 dark:bg-dark-900/80">
                <button className="active sidebar-toggle-btn cursor-pointer flex size-7 flex-col justify-center space-y-1.5 text-primary-600 outline-hidden focus:outline-hidden dark:text-primary-400 ltr:ml-0.5 rtl:mr-0.5">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="flex items-center gap-2 ltr:-mr-1.5 rtl:-ml-1.5">
                    <button
                        className="btn-base h-8 w-64 justify-between gap-2 rounded-full border border-gray-200 px-3 text-xs-plus hover:border-gray-400 dark:border-dark-500 dark:hover:border-dark-400 max-sm:hidden"
                        type="button"
                    >
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="size-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                ></path>
                            </svg>
                            <span className="text-gray-400 dark:text-dark-300">
                                Search here...
                            </span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="20"
                            aria-hidden="true"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                                opacity="0.4"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M11.8 6L8 15.1h-.9L10.8 6h1z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        className="btn-base btn shrink-0 p-0 hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-700 active:bg-gray-300/25 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:focus:bg-dark-300/10 dark:active:bg-dark-300/20 relative size-9 rounded-full sm:hidden"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="size-6 text-gray-900 dark:text-dark-100"
                        >
                            <path
                                fill="currentColor"
                                d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
                                opacity="0.3"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M20.92 22a1.07 1.07 0 0 1-.752-.308l-2.857-2.859a1.086 1.086 0 0 1 0-1.522 1.084 1.084 0 0 1 1.52 0l2.858 2.86a1.086 1.086 0 0 1 0 1.521c-.215.2-.492.308-.768.308Z"
                            ></path>
                        </svg>
                    </button>
                    <div className="relative flex" data-headlessui-state="">
                        <button
                            className="btn-base btn shrink-0 p-0 hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-700 active:bg-gray-300/25 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:focus:bg-dark-300/10 dark:active:bg-dark-300/20 relative size-9 rounded-full"
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                            id="headlessui-popover-button-«r2s»"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-6 text-gray-900 dark:text-dark-100"
                            >
                                <path
                                    d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V9.83095C18 11.2503 18.3857 12.6429 19.116 13.8599L19.6694 14.7823C20.0364 15.3941 20.22 15.7 20.2325 15.9497C20.252 16.3366 20.0463 16.6999 19.7045 16.8823C19.4839 17 19.1272 17 18.4138 17H5.5863C4.87286 17 4.51614 17 4.29549 16.8823C3.95374 16.6999 3.74803 16.3366 3.7675 15.9497C3.78006 15.7 3.96359 15.3941 4.33065 14.7823L4.88407 13.8599C5.61428 12.6429 6 11.2503 6 9.83098V8Z"
                                    fill="currentColor"
                                    fill-opacity="0.3"
                                ></path>
                                <path
                                    d="M14.35 18C14.4328 18 14.5007 18.0673 14.493 18.1498C14.4484 18.6254 14.1923 19.0746 13.7678 19.4142C13.2989 19.7893 12.663 20 12 20C11.337 20 10.7011 19.7893 10.2322 19.4142C9.80772 19.0746 9.55165 18.6254 9.50702 18.1498C9.49928 18.0673 9.56716 18 9.65 18L12 18L14.35 18Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <div className="avatar-dot absolute rounded-full this:error bg-this dark:bg-this-light top-0 ltr:right-0 rtl:left-0">
                                <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-inherit opacity-80"></span>
                            </div>
                        </button>
                    </div>
                    <button
                        className="btn-base btn shrink-0 p-0 hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-700 active:bg-gray-300/25 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:focus:bg-dark-300/10 dark:active:bg-dark-300/20 relative size-9 rounded-full"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="size-6"
                        >
                            <path
                                fill="currentColor"
                                d="M15 2H9C7.34 2 6 3.34 6 5v14c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3Z"
                                opacity="0.4"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M18.67 5.33h-.34c-.12 0-.23 0-.35.01.01.05.02.1.02.16v13c0 .06-.01.11-.02.16.11.01.22.01.35.01h.34c2.66 0 3.33-.67 3.33-3.34V8.67c0-2.67-.67-3.34-3.33-3.34ZM6 18.5v-13c0-.06.01-.11.02-.16-.12-.01-.23-.01-.35-.01h-.34C2.67 5.33 2 6 2 8.67v6.66c0 2.67.67 3.34 3.33 3.34h.34c.12 0 .23 0 .35-.01A.777.777 0 0 1 6 18.5Z"
                            ></path>
                        </svg>
                    </button>
                    <div data-headlessui-state="">
                        <div className="relative">
                            <button
                                className="btn-base btn shrink-0 p-0 hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-700 active:bg-gray-300/25 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:focus:bg-dark-300/10 dark:active:bg-dark-300/20 size-9 rounded-full"
                                type="button"
                                id="headlessui-listbox-button-«r30»"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                data-headlessui-state=""
                            >
                                <img
                                    className="size-6"
                                    alt="en"
                                    src="/images/flags/svg/rounded/united-kingdom.svg"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Login;
