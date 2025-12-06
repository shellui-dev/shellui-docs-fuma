'use client';

import {
  Fragment,
  type ReactElement,
  useEffect,
  useState,
} from 'react';
import { TerminalIcon } from 'lucide-react';

export function InstallAnimation() {
  const installCmd = 'shellui init';
  const tickTime = 100;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 3;
  const timeLogo = timeCommandRun + 2;
  const timeStage1 = timeLogo + 5; // Detected/Setup stage
  const timeStage2 = timeStage1 + 4; // Creating folders stage
  const timeStage3 = timeStage2 + 4; // Downloading Tailwind stage
  const timeStage4 = timeStage3 + 4; // Building CSS stage
  const timeFinal = timeStage4 + 3; // Final success state
  const timeWindowOpen = timeFinal + 1;
  const timeEnd = timeWindowOpen + 2; // Hold final state a bit longer

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

  // Always show the command (colored)
  lines.push(
    <span key="command_type" className="text-green-400">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && (
        <div className="inline-block h-3 w-1 animate-pulse bg-white" />
      )}
    </span>,
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  // Show stages one at a time, replacing previous ones
  if (tick > timeCommandRun) {
    // Stage 0: Logo and initializing message (shown initially and in final state)
    if (tick <= timeStage1 || tick > timeFinal) {
      lines.push(
        <Fragment key="logo">
          <span className="text-cyan-400">  ____    _              _   _   _   _   ___ </span>
          <span className="text-cyan-400"> / ___|  | |__     ___  | | | | | | | | |_ _|</span>
          <span className="text-cyan-400"> \___ \  | '_ \   / _ \ | | | | | | | |  | |</span>
          <span className="text-cyan-400">  ___) | | | | | |  __/ | | | | | |_| |  | |</span>
          <span className="text-cyan-400"> |____/  |_| |_|  \___/ |_| |_|  \___/  |___|</span>
          <span></span>
          <span className="text-yellow-400">Initializing ShellUI...</span>
        </Fragment>,
      );
    }

    // Stage 1: Detected/Setup (shown only during this stage)
    if (tick > timeLogo && tick <= timeStage2) {
      lines.push(
        <Fragment key="detected">
          <span className="text-blue-400">Detected: <span className="text-white">BlazorServer</span></span>
          <span className="text-blue-400">Project: <span className="text-white">TestApp</span></span>
          <span className="text-yellow-400">Setting up Tailwind CSS...</span>
          <span className="text-green-400">Selected: <span className="text-white">standalone</span></span>
        </Fragment>,
      );
    }

    // Stage 2: Creating folders (shown only during this stage)
    if (tick > timeStage1 && tick <= timeStage3) {
      lines.push(
        <Fragment key="creating">
          <span className="text-yellow-400">Creating component folders...</span>
          <span className="text-green-400">Created: <span className="text-white">Components/UI/</span></span>
          <span className="text-yellow-400">Creating configuration...</span>
          <span className="text-green-400">Created: <span className="text-white">shellui.json</span></span>
        </Fragment>,
      );
    }

    // Stage 3: Downloading Tailwind (shown only during this stage)
    if (tick > timeStage2 && tick <= timeStage4) {
      lines.push(
        <Fragment key="downloading">
          <span className="text-yellow-400">Downloading Tailwind CSS standalone CLI...</span>
          <span className="text-blue-400">Downloading Tailwind CLI <span className="text-white">v4.1.14</span>...</span>
          <span className="text-green-400">Tailwind CLI downloaded successfully!</span>
        </Fragment>,
      );
    }

    // Stage 4: Building CSS (shown only during this stage)
    if (tick > timeStage3 && tick <= timeFinal) {
      lines.push(
        <Fragment key="building">
          <span className="text-yellow-400">Creating CSS files...</span>
          <span className="text-green-400">Created: <span className="text-white">wwwroot/input.css</span></span>
          <span className="text-green-400">Created: <span className="text-white">wwwroot/app.css</span></span>
          <span className="text-green-400">Created: <span className="text-white">tailwind.config.js</span></span>
          <span className="text-yellow-400">Building Tailwind CSS...</span>
          <span className="text-green-400">Built: <span className="text-white">Tailwind CSS</span></span>
        </Fragment>,
      );
    }

    // Final state: Success message and next steps (replaces everything except logo)
    if (tick > timeFinal) {
      lines.push(
        <Fragment key="success">
          <span></span>
          <span className="font-bold text-green-400">ShellUI initialized successfully!</span>
          <span></span>
          <span className="text-yellow-400">Next steps:</span>
          <span className="text-white">  1. Add components: <span className="text-green-400">dotnet shellui add button</span></span>
          <span className="text-white">  2. Browse all: <span className="text-green-400">dotnet shellui list</span></span>
        </Fragment>,
      );
    }
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
      {tick > timeWindowOpen && (
        <LaunchAppWindow className="absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10" />
      )}
      <pre className="overflow-hidden rounded-xl border text-sm shadow-lg bg-card">
        <div className="flex flex-row items-center gap-2 border-b px-4 py-2">
          <TerminalIcon className="size-4" />{' '}
          <span className="font-bold">Terminal</span>
          <div className="grow" />
          <div className="size-2 rounded-full bg-red-400" />
        </div>
        <div className="min-h-[208px]">
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
        <p className="absolute inset-x-0 text-center">localhost:5000</p>
      </div>
      <div className="p-4 text-sm">ShellUI initialized!</div>
    </div>
  );
}
