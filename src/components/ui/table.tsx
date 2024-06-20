import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn("w-full caption-bottom text-sm border-separate", className)}
            style={{ borderSpacing: '0 10px' }}
            {...props}
        />
    </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn("[&_tr]:border rounded-lg sm:scale-100 border-[1.5px] border-[#BCCFFF] bg-gradient-to-t from-[#E3EAF4] to-[#FFF]", className)}
        {...props}
    />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:border-2", className)}
        {...props}
    />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",
            className
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "transition-colors sm:scale-100 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800 rounded-lg border border-[#BCCFFF]",
            className
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-12 px-4 sm:px-7 p-0  sm:p-7 whitespace-normal break-keep text-center align-middle font-bold text-sm sm:text-xl text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400 border-b border-t first:border-l last:border-r first:rounded-l-xl last:rounded-r-xl border-[#BCCFFF]",
            className
        )}
        style={{ verticalAlign: 'middle', height: 'auto', paddingBottom: '20px', whiteSpace: 'normal', wordBreak: 'keep-all' }}
        {...props}
    />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn("p-3 sm:p-7 whitespace-normal break-keep align-middle text-center text-xs sm:text-lg [&:has([role=checkbox])]:pr-0 bg-gradient-to-b from-[#FFF] to-[#F4F5F6] border-t border-b first:border-l last:border-r border-[#F3F1F1] first:rounded-l-lg last:rounded-r-lg", className)}

        {...props}
    />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className)}
        {...props}
    />
));
TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
    TableCaption,
};
