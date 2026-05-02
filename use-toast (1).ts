import { useCallback, useState } from 'react';
import { Upload, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  isProcessing: boolean;
}

const FileUpload = ({ onFileUpload, isProcessing }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileUpload(file);
  }, [onFileUpload]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileUpload(file);
  }, [onFileUpload]);

  const handleClick = () => document.getElementById('file-input')?.click();

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "group relative cursor-pointer rounded-2xl card-glow transition-all duration-300",
        "hover:border-purple-500/30 hover:shadow-purple-500/10",
        isDragging && "border-purple-500/50 scale-[1.01] shadow-purple-500/20",
        isProcessing && "pointer-events-none opacity-60"
      )}
    >
      {/* Subtle glow on drag */}
      {isDragging && (
        <div className="absolute inset-0 rounded-2xl bg-purple-500/5 pointer-events-none" />
      )}

      <div className="relative flex flex-col items-center justify-center gap-5 px-6 py-14">
        <div className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300",
          isDragging
            ? "bg-purple-500/15 border-purple-500/30"
            : "bg-purple-500/8 border-purple-500/15 group-hover:bg-purple-500/12"
        )}>
          {isProcessing
            ? <Loader2 className="h-6 w-6 text-purple-400 animate-spin" />
            : <Upload className="h-6 w-6 text-purple-400" />
          }
        </div>

        <div className="text-center space-y-1.5">
          <h3 className="text-xl font-display font-bold text-foreground tracking-tight">
            {isProcessing ? "Zpracovávám…" : "Nahraj svá TikTok data"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isProcessing ? "Počkej chvíli" : "Přetáhni soubor sem nebo klikni"}
          </p>
        </div>

        {!isProcessing && (
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full gradient-button text-white font-semibold text-sm hover:opacity-90 transition shadow-md shadow-purple-500/20"
          >
            Zjistit svůj čas
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

        <div className="flex items-center gap-2 text-[11px] text-muted-foreground/50">
          <span>JSON</span><span>·</span>
          <span>ZIP</span><span>·</span>
          <span>TXT</span>
        </div>
      </div>

      <input
        id="file-input"
        type="file"
        accept=".json,.zip,.txt,text/plain,application/json,application/zip"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;
