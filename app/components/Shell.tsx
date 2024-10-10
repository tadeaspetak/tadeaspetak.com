import React, { ReactNode } from "react";

import {
  faGithub,
  faGoodreads,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profileImage from "~/images/profile.jpg";

export const Shell: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="flex justify-center w-full p-2 bg-white dark:bg-slate-900 shadow-lg sm:fixed sm:p-3">
        <div className="flex items-center justify-between w-full max-w-xl mx-2">
          <button
            className="flex items-center hover:text-red-600 sm:mb-0"
            title="Back Up 👆"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="inline-block w-12 h-12 mr-2">
              <img src={profileImage} alt="Tadeáš Peták" className="rounded" />
            </span>
            <span className="hidden sm:block">Tadeáš Peták</span>
          </button>
          <div className="flex items-center justify-center space-x-2 text-xl">
            <a
              href="https://www.linkedin.com/in/tade%C3%A1%C5%A1-pet%C3%A1k-2846853a/"
              title="The Official Stuff"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/tadeaspetak"
              title="Semicolons"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.goodreads.com/user/show/7310589-tadeas-petak"
              title="Letterings"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoodreads} />
            </a>
            <a
              href="https://medium.com/@tadeaspetak"
              title="Scribbles"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center text-gray-900 sm:pt-12">
        <div className="flex flex-col max-w-xl mx-3">{children}</div>
      </main>
      <footer className="mt-8"></footer>
    </div>
  );
};
