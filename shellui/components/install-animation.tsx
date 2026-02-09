"use client";

import { Fragment, type ReactElement, useEffect, useState } from "react";
import { TerminalIcon } from "lucide-react";

export function InstallAnimation() {
  const installCmd = "shellui init";
  const tickTime = 100;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 3;
  const timeLogo = timeCommandRun + 1;
  const timeDetected = timeLogo + 4;
  const timeBootstrap = timeDetected + 4;
  const timeTailwind = timeBootstrap + 4;
  const timeMethod = timeTailwind + 3;
  const timeDownload = timeMethod + 4;
  const timeFiles = timeDownload + 4;
  const timeBuild = timeFiles + 4;
  const timeFinal = timeBuild + 3;
  const timeEnd = timeFinal + 3;

  const [tick, setTick] = useState(timeEnd);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= timeEnd ? prev : prev + 1));
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, [timeEnd]);

  const lines: ReactElement[] = [];

  // Command typing
  lines.push(
    <span key="prompt" className="text-blue-400">
      PS C:\MyApp&gt;{" "}
    </span>,
  );
  lines.push(
    <span key="command_type" className="text-green-400">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && (
        <span className="inline-block h-3 w-1 animate-pulse bg-white" />
      )}
    </span>,
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  // Logo
  if (tick > timeCommandRun) {
    lines.push(
      <Fragment key="logo">
        <span className="text-blue-500 text-[10px] leading-none font-bold whitespace-pre">
          {`  
  ███████╗██╗  ██╗███████╗██╗     ██╗     ██╗   ██╗██╗
  ██╔════╝██║  ██║██╔════╝██║     ██║     ██║   ██║██║
  ███████╗███████║█████╗  ██║     ██║     ██║   ██║██║
  ╚════██║██╔══██║██╔══╝  ██║     ██║     ██║   ██║██║
  ███████║██║  ██║███████╗███████╗███████╗╚██████╔╝██║
  ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝
              `}
        </span>
        <span> </span>
      </Fragment>,
    );
  }

  // Detected project
  if (tick > timeLogo) {
    lines.push(
      <Fragment key="detected">
        <span className="text-blue-400">
          Detected: <span className="text-white font-semibold">BlazorServer</span>
        </span>
        <span className="text-blue-400">
          Project: <span className="text-white">MyApp</span>
        </span>
        <span className="text-blue-400">
          Namespace: <span className="text-white">MyApp</span>
        </span>
      </Fragment>,
    );
  }

  // Bootstrap cleanup
  if (tick > timeDetected) {
    lines.push(
      <Fragment key="bootstrap">
        <span className="text-yellow-400">
          Checking for Bootstrap files to clean up...
        </span>
        <span className="text-red-400">
          Deleted: <span className="text-white">wwwroot/lib/bootstrap folder</span>
        </span>
        <span className="text-green-400">Removed 1 Bootstrap items.</span>
      </Fragment>,
    );
  }

  // Tailwind setup
  if (tick > timeBootstrap) {
    lines.push(
      <Fragment key="tailwind-setup">
        <span className="text-yellow-400">Setting up Tailwind CSS...</span>
        <span className="text-white">Which Tailwind CSS method do you prefer?</span>
        <span className="text-green-400">
          {">"} standalone - Use Tailwind CLI (no Node.js required, automatic
          builds)
        </span>
        <span className="text-muted-foreground">
          {"  "}npm - Use npm packages (requires Node.js, more flexible)
        </span>
      </Fragment>,
    );
  }

  // Download Tailwind
  if (tick > timeMethod) {
    lines.push(
      <Fragment key="download">
        <span> </span>
        <span className="text-yellow-400">
          Downloading Tailwind CSS standalone CLI...
        </span>
        <span className="text-blue-400">
          Downloading Tailwind CLI{" "}
          <span className="text-white">v4.1.18</span>...
        </span>
        <span className="text-green-400">
          Tailwind CLI downloaded successfully!
        </span>
      </Fragment>,
    );
  }

  // Creating files
  if (tick > timeDownload) {
    lines.push(
      <Fragment key="files">
        <span className="text-yellow-400">Creating component folders...</span>
        <span className="text-green-400">
          Created: <span className="text-white">Components/UI/</span>
        </span>
        <span className="text-green-400">
          Created: <span className="text-white">shellui.json</span>
        </span>
      </Fragment>,
    );
  }

  // Building CSS
  if (tick > timeFiles) {
    lines.push(
      <Fragment key="css">
        <span className="text-yellow-400">Creating CSS files...</span>
        <span className="text-green-400">
          Created: <span className="text-white">wwwroot/input.css</span>
        </span>
        <span className="text-green-400">
          Created: <span className="text-white">wwwroot/app.css</span>
        </span>
        <span className="text-yellow-400">Building Tailwind CSS...</span>
        <span className="text-green-400">
          Built: <span className="text-white">Tailwind CSS</span>
        </span>
      </Fragment>,
    );
  }

  // Final success
  if (tick > timeBuild) {
    lines.push(
      <Fragment key="success">
        <span> </span>
        <span className="font-bold text-green-400">
          ShellUI initialized successfully!
        </span>
        <span> </span>
        <span className="text-yellow-400">Next steps:</span>
        <span className="text-white">
          {" "}
          1. Add components:{" "}
          <span className="text-green-400">shellui add button card input</span>
        </span>
        <span className="text-white">
          {" "}
          2. Browse all:{" "}
          <span className="text-green-400">shellui list</span>
        </span>
        <span className="text-white">
          {" "}
          3. Run your app:{" "}
          <span className="text-green-400">dotnet run</span>
        </span>
      </Fragment>,
    );
  }

  return (
    <div
      className="relative mt-4 w-full mx-auto max-w-[800px]"
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0);
        }
      }}
    >
      {tick > timeFinal && (
        <LaunchAppWindow className="absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10" />
      )}
      <pre className="overflow-hidden rounded-xl border text-sm shadow-lg bg-transparent">
        <div className="flex flex-row items-center gap-2 border-b px-4 py-2">
          <TerminalIcon className="size-4" />{" "}
          <span className="font-bold">Terminal</span>
          <div className="grow" />
          <div className="size-2 rounded-full bg-red-400" />
        </div>
        <div className="min-h-[280px] max-h-[400px] overflow-y-auto">
          <code className="grid p-4">{lines}</code>
        </div>
      </pre>
    </div>
  );
}

function LaunchAppWindow({ className }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-md border bg-background shadow-xl ${className}`}
    >
      <div className="relative flex h-6 flex-row items-center border-b bg-muted px-4 text-xs text-muted-foreground">
        <p className="absolute inset-x-0 text-center">
          http://localhost:5249
        </p>
      </div>
      <div className="p-4 text-sm">
        <span className="text-green-600 dark:text-green-400 font-medium">
          ShellUI initialized!
        </span>
        <span className="block text-xs text-muted-foreground mt-1">
          Listening on http://localhost:5249
        </span>
      </div>
    </div>
  );
}
