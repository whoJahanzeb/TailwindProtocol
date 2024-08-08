import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import GuidesPart from "../components/guidesPart.jsx";
import ResourcesPart from "../components/resourcesPart.jsx";
import { useSelector } from "react-redux";

const Api = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <>
      <main
        className={mode ? "max-w-5xl mx-auto py-20" : "max-w-5xl mx-auto py-20"}
      >
        <div className="px-10">
          <div>
            <h1 className="text-2xl font-semibold">API Documentation</h1>
          </div>
          <div className="my-4">
            <p>
              Use the Protocol API to access contacts, conversations, group
              messages, and more and seamlessly integrate your product into the
              workflows of dozens of devoted Protocol users.
            </p>
          </div>
          <div className="space-x-4 my-8 flex">
            <NavLink
              to="/quickstart"
              className={
                mode
                  ? "bg-zinc-800 font-semibold flex items-center rounded-full px-2 py-1"
                  : "bg-zinc-200 font-semibold flex items-center rounded-full px-2 py-1"
              }
            >
              Quickstart
              <BsArrowRight />
            </NavLink>
            <NavLink
              to="/sdks"
              className={
                mode
                  ? "border rounded-full border-zinc-700 px-2 py-1 text-xs"
                  : "text-xs border rounded-full px-2 py-1"
              }
            >
              Explore SDKs
            </NavLink>
          </div>
          <div className="my-20">
            <div>
              <p className="text-lg font-semibold">Getting started</p>
            </div>
            <div>
              <p>
                To get started, create a new application in your{" "}
                <span
                  className={
                    mode
                      ? "text-zinc-200 font-semibold"
                      : "text-zinc-900 font-semibold"
                  }
                >
                  developer settings
                </span>
                , then read about how to make requests for the resources you
                need to access using our HTTP APIs or dedicated client SDKs.
                When your integration is ready to go live, publish it to our{" "}
                <span
                  className={
                    mode
                      ? "text-zinc-200 font-semibold"
                      : "text-zinc-900 font-semibold"
                  }
                >
                  integrations directory
                </span>{" "}
                to reach the Protocol community.
              </p>
            </div>
            <div>
              <NavLink
                to="sdks"
                className={
                  mode
                    ? "flex items-center space-x-4 my-4 text-zinc-200 font-semibold"
                    : "flex items-center space-x-4 my-4 text-zinc-900 font-semibold"
                }
              >
                <div>Get your API key</div>
                <BsArrowRight />
              </NavLink>
            </div>
          </div>
          <GuidesPart />
          <ResourcesPart />
        </div>
      </main>
    </>
  );
};
export default Api;
