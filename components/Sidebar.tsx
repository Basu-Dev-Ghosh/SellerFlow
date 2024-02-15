export default function Sidebar({
  page,
  setPage,
}: {
  page: string;
  setPage: (newPage: string) => void;
}) {
  return (
    <div className="flex flex-col w-2/4 bg-white  overflow-hidden ">
      <ul className="flex flex-col py-2">
        <li
          className={`${page === "sales" ? "bg-blue-600" : ""}`}
          onClick={() => setPage("sales")}
        >
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-home" />
            </span>
            <span
              className={`text-sm font-medium ${
                page === "sales" ? "text-white" : ""
              }`}
            >
              Sales
            </span>
          </a>
        </li>
        <li
          className={`${page === "inventory" ? "bg-blue-600" : ""}`}
          onClick={() => setPage("inventory")}
        >
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-music" />
            </span>
            <span
              className={`text-sm font-medium ${
                page === "inventory" ? "text-white" : ""
              }`}
            >
              Inventory{" "}
            </span>
          </a>
        </li>
        <li
          className={`${page === "analytics" ? "bg-blue-600" : ""}`}
          onClick={() => setPage("analytics")}
        >
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-drink" />
            </span>
            <span
              className={`text-sm font-medium ${
                page === "analytics" ? "text-white" : ""
              }`}
            >
              Analytics{" "}
            </span>
          </a>
        </li>
        <li
          className={`${page === "reviews" ? "bg-blue-600" : ""}`}
          onClick={() => setPage("reviews")}
        >
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-shopping-bag" />
            </span>
            <span
              className={`text-sm font-medium ${
                page === "reviews" ? "text-white" : ""
              }`}
            >
              Reviews
            </span>
          </a>
        </li>

        <li
          className={`${page === "notifications" ? "bg-blue-600" : ""}`}
          onClick={() => setPage("notifications")}
        >
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-bell" />
            </span>
            <span
              className={`text-sm font-medium ${
                page === "notifications" ? "text-white" : ""
              }`}
            >
              Notifications
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
