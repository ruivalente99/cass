import { AiFillBug, AiFillStar } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import {
  FiAlignLeft,
  FiAnchor,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiEdit,
  FiEye,
  FiItalic,
} from "react-icons/fi";

const IssuesComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">
          Company X
        </span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-green-900">
          <AiFillStar />
          <span>
            Feature Requirement
          </span>
        </div>
      </div>
      <div className="-ml-1.5 mb-4 flex items-center gap-1.5">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg"
          alt="avatar"
          className="ml-1.5 size-8 rounded bg-orange-200 shadow-inner"
        />
        <div>
          <span className="block text-sm font-medium">
            Customer Z
          </span>
          <span className="block text-xs text-zinc-600">
           Company X
          </span>
        </div>
      </div>
      <div className="mb-1 line-clamp-1 text-xl font-medium">
        Excel spreedsheets automation
      </div>
      <span className="line-clamp-3 text-sm leading-relaxed text-zinc-600">
        I need to automate the process of creating Excel spreadsheets for my clients. I have a template that I use for each client, but I need to automate the process of creating the spreadsheet and populating it with the client's data.
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 bg-white/50 p-4 backdrop-blur">
        <span className="flex w-fit items-center gap-1 rounded bg-yellow-100 px-1.5 py-0.5 text-sm text-yellow-900">
          <FiClock />
          <span>TODO</span>
        </span>
        <span className="flex w-fit items-center gap-1 rounded bg-zinc-200 px-1.5 py-0.5 text-sm text-zinc-900">
          <FiArrowRight />
          <span>Medium</span>
        </span>
      </div>
    </div>
  );
};

const KanbanComponent = () => {
  return (
    <div className="relative grid h-full w-full min-w-96 grid-cols-2 gap-2 p-4 pb-0 pr-0">
      <div className="relative z-0 h-full w-full rounded-t-xl bg-zinc-100 p-4">
        <div className="flex items-center justify-between">
          <span className="flex w-fit items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 text-sm text-blue-900">
            <FiEye />
            <span>Doing</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask />
          <BGTask />
          <BGTask />
        </div>
      </div>
      <div className="relative z-0 h-full w-full rounded-t-xl bg-zinc-100 p-4">
        <div className="flex items-center justify-between">
          <span className="green-yellow-900 flex w-fit items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-sm">
            <FiCheck />
            <span>Done</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask />
        </div>
      </div>

      <OverlayTask />
    </div>
  );
};

const BGTask = () => {
  return (
    <div className="w-full rounded-lg bg-white p-4 text-[0.5rem] text-zinc-400 shadow blur-[1px] sm:text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
};

const OverlayTask = () => {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-lg border-2 border-orange-400 bg-white p-4 shadow-xl shadow-orange-400/20">
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        <span className="text-zinc-600">Design Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-orange-100 px-1.5 py-0.5 text-orange-900">
          <FiAnchor />
          <span>Features</span>
        </div>
      </div>
      <span className="mb-0.5 block text-lg font-medium">
        Change the theme for the XYZ client
        {/* Create a small square with color */} 
        <span className="inline-block w-4 h-4 rounded bg-blue-500 ml-2" />
        {/* Add color name */} 
        <span className="text-blue-500 ml-2 text-center">Blue</span>
        
        </span>
      <span className="block text-sm text-zinc-600">December 4th, 2023</span>
    </div>
  );
};

const GanttComponent = () => {
  return (
    <div className="relative h-full min-w-96 p-4 pb-0 pt-0">
      <div className="grid h-full grid-cols-5">
        <span className="block h-full w-full pt-4 text-center text-sm">
          Sat
        </span>
        <span className="block h-full w-full bg-zinc-100 pt-4 text-center text-sm">
          Sun
        </span>
        <span className="block h-full w-full pt-4 text-center text-sm">
          Mon
        </span>
        <span className="block h-full w-full bg-zinc-100 pt-4 text-center text-sm">
          Tue
        </span>
        <span className="block h-full w-full pt-4 text-center text-sm">
          Wed
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-10 space-y-4 p-4">
        <div className="h-4 w-2/5 rounded-full bg-purple-500" />
        <div className="ml-[20%] h-4 w-3/5 rounded-full bg-blue-500" />
        <div className="flex w-full">
          <div className="h-4 w-3/5 rounded-full bg-green-500" />
          <div className="h-4 w-1/5 rounded-full bg-blue-500" />
        </div>
        <div className="ml-[60%] h-4 w-2/5 rounded-full bg-amber-500" />
        <div className="h-4 w-1/5 rounded-full bg-pink-500" />
        <div className="flex w-full">
          <div className="ml-[60%] h-4 w-1/5 rounded-full bg-purple-500" />
          <div className="h-4 w-1/5 rounded-full bg-pink-500" />
        </div>
        <div className="ml-[60%] h-4 w-2/5 rounded-full bg-green-500" />
        <div className="ml-[20%] h-4 w-3/5 rounded-full bg-amber-500" />
        <div className="flex w-full">
          <div className="h-4 w-2/5 rounded-full bg-red-500" />
          <div className="ml-[20%] h-4 w-1/5 rounded-full bg-red-500" />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/3 top-0 w-0.5 bg-orange-400">
        <span className="absolute left-0 top-0 -translate-x-1/2 rounded-b bg-orange-500 px-1.5 pb-0.5 text-xs font-medium text-white">
          Now
        </span>
      </div>
    </div>
  );
};

const DocumentationComponent = () => {
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEye />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEdit />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiAlignLeft />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-900">
          Rui Valente
        </span>
        <span className="block w-fit rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-900">
          CASS Team
        </span>
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        How to use CASS to generate Excel Spreadsheets
        <span className="inline-block scale-150 animate-pulse text-green-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-green-600" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
        <span className="inline-block">
          First of all you need to login to your account and 
            {/* Add typing text in gray */}
            <span className="text-gray-400 typing-text text-xs">  ... typing</span>

         </span>
        {" "}
        <span className="inline-block scale-150 animate-pulse text-blue-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-blue-600" />
      </span>
    </div>
  );
};

export const data = [
  {
    id: 1,
    title: "Consulting",
    Component: IssuesComponent,
    cardTitle: "1ON1 Consulting",
    cardSubtitle:
      "Customize your product with your own Business Logic. Give us your requirements and we will build it for you.",
  },
  {
    id: 2,
    title: "24/7 Support",
    Component: KanbanComponent,
    cardTitle: "Support our clients using Agile Methodologies",
    cardSubtitle:
      "We provide 24/7 support to our clients using Agile Methodologies. You can keep track of your issues and their status using our Kanban board.",
  },
  {
    id: 3,
    title: "Workshops",
    Component: GanttComponent,
    cardTitle: "Schedule Workshops with us!",
    cardSubtitle:
      "Don't know where to start? Schedule a workshop with us and we will help you get started with AI Automation.",
  },
  {
    id: 4,
    title: "Documentation",
    Component: DocumentationComponent,
    cardTitle: "Get our Documentation!",
    cardSubtitle:
      "We provide detailed documentation for all our products. You can access them anytime you want.",
  },
];
