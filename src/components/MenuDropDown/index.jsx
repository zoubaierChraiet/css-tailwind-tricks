import React from "react";

import "./index.css";

export const MenuDropDown = () => {
  return (
    <div className="h-full w-full mt-[100px]">
      <div className="">
        <ul className="list">
          <li className="list-item">
            <a className="text-white block" href="/MenuDropDown">
              Home
            </a>
          </li>
          <li className="list-item">
            <a className="text-white block" href="/MenuDropDown">
              About
            </a>
          </li>
          <li className="list-item">
            <a className="text-white block" href="/MenuDropDown">
              Blog
            </a>
            <ul className="list">
              <li className="list-item">
                <a href="/">Blog 1</a>
              </li>
              <li className="list-item">
                <a href="/">Blog 2</a>
              </li>
              <li className="list-item">
                <a href="/">Blog 3</a>
                <ul className="list">
                  <li className="list-item">
                    <a href="/">blog 3.1</a>
                  </li>
                  <li className="list-item">
                    <a href="/">blog 3.1</a>
                  </li>
                  <li className="list-item">
                    <a href="/">blog 3.1</a>
                  </li>
                </ul>
              </li>
              <li className="list-item">
                <a href="/">Blog 4</a>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <a className="text-white block" href="/MenuDropDown">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
