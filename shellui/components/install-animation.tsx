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

  // Always show the command
  lines.push(
    <span key="command_type">
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
          <span>  ____    _              _   _   _   _   ___ </span>
          <span> / ___|  | |__     ___  | | | | | | | | |_ _|</span>
          <span> \___ \  | '_ \   / _ \ | | | | | | | |  | |</span>
          <span>  ___) | | | | | |  __/ | | | | | |_| |  | |</span>
          <span> |____/  |_| |_|  \___/ |_| |_|  \___/  |___|</span>
          <span></span>
          <span>Initializing ShellUI...</span>
        </Fragment>,
      );
    }

    // Stage 1: Detected/Setup (shown only during this stage)
    if (tick > timeLogo && tick <= timeStage2) {
      lines.push(
        <Fragment key="detected">
          <span>Detected: BlazorServer</span>
          <span>Project: TestApp</span>
          <span>Setting up Tailwind CSS...</span>
          <span>Selected: standalone</span>
        </Fragment>,
      );
    }

    // Stage 2: Creating folders (shown only during this stage)
    if (tick > timeStage1 && tick <= timeStage3) {
      lines.push(
        <Fragment key="creating">
          <span>Creating component folders...</span>
          <span>Created: Components/UI/</span>
          <span>Creating configuration...</span>
          <span>Created: shellui.json</span>
        </Fragment>,
      );
    }

    // Stage 3: Downloading Tailwind (shown only during this stage)
    if (tick > timeStage2 && tick <= timeStage4) {
      lines.push(
        <Fragment key="downloading">
          <span>Downloading Tailwind CSS standalone CLI...</span>
          <span>Downloading Tailwind CLI v4.1.14...</span>
          <span>Tailwind CLI downloaded successfully!</span>
        </Fragment>,
      );
    }

    // Stage 4: Building CSS (shown only during this stage)
    if (tick > timeStage3 && tick <= timeFinal) {
      lines.push(
        <Fragment key="building">
          <span>Creating CSS files...</span>
          <span>Created: wwwroot/input.css</span>
          <span>Created: wwwroot/app.css</span>
          <span>Created: tailwind.config.js</span>
          <span>Building Tailwind CSS...</span>
          <span>Built: Tailwind CSS</span>
        </Fragment>,
      );
    }

    // Final state: Success message and next steps (replaces everything except logo)
    if (tick > timeFinal) {
      lines.push(
        <Fragment key="success">
          <span></span>
          <span className="font-bold">ShellUI initialized successfully!</span>
          <span></span>
          <span>Next steps:</span>
          <span>  1. Add components: dotnet shellui add button</span>
          <span>  2. Browse all: dotnet shellui list</span>
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
