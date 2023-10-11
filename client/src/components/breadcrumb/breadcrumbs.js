import React from "react";

function Breadcrumbs() {
  return (
    <>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3 p-0">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white no-underline"
            >
              Home
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white no-underline"
              >
                Projects
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
