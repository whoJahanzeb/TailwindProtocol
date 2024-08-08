import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegCircleUser, FaUserGroup } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { useSelector } from "react-redux";

const ResourcesPart = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <>
      <div
        className={mode ? "border-b my-20 border-zinc-700" : "border-b my-20"}
      >
        <p className="my-4 font-semibold text-lg">Resources</p>
      </div>
      <div className="md:flex md:gap-10 my-4">
        <NavLink to="contacts">
          <div
            className={
              mode
                ? "bg-zinc-800 py-10 hover:bg-zinc-700 px-4 rounded-md"
                : "bg-gray-50 py-10 hover:bg-gray-100 px-4 rounded-md"
            }
          >
            <div className="grid gap-4">
              <FaRegCircleUser className="text-2xl" />
              <h2 className="font-semibold text-sm">Contacts</h2>
            </div>
            <div className="my-2">
              <p>
                Learn about the contact model and how to create, retrieve,
                update, delete, and list contacts.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="conversations">
          <div
            className={
              mode
                ? "bg-zinc-800 py-10 hover:bg-zinc-700 px-4 rounded-md"
                : "bg-gray-50 py-10 hover:bg-gray-100 px-4 rounded-md"
            }
          >
            <div className="grid gap-4">
              <BiMessageSquareDetail className="text-2xl" />
              <h2 className="font-semibold text-sm">Conversations</h2>
            </div>
            <div className="my-2">
              <p>
                Learn about the conversation model and how to create, retrieve,
                update, delete, and list conversations.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="messages">
          <div
            className={
              mode
                ? "bg-zinc-800 py-10 hover:bg-zinc-700 px-4 rounded-md"
                : "bg-gray-50 py-10 hover:bg-gray-100 px-4 rounded-md"
            }
          >
            <div className="grid gap-4">
              <CiMail className="text-2xl" />
              <h2 className="font-semibold text-sm">Messages</h2>
            </div>
            <div className="my-2">
              <p>
                Learn about the message model and how to create, retrieve,
                update, delete, and list messages.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="groups">
          <div
            className={
              mode
                ? "bg-zinc-800 py-10 hover:bg-zinc-700 px-4 rounded-md"
                : "bg-gray-50 py-10 hover:bg-gray-100 px-4 rounded-md"
            }
          >
            <div className="grid gap-4">
              <FaUserGroup className="text-2xl" />
              <h2 className="font-semibold text-sm">Groups</h2>
            </div>
            <div className="my-2">
              <p>
                Learn about the group model and how to create, retrieve, update,
                delete, and list groups.
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export default ResourcesPart;
