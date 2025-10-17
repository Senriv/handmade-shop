import PaginationArrowSVG from "@/assets/main/catalog/pagination_arrows.svg";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (nextPage: number) => void;
  disabled?: boolean;
  windowSize?: number; //how many numbers arround
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onChange,
  disabled,
  windowSize = 1,
}) => {
  if (!Number.isFinite(totalPages) || totalPages <= 1) return null;

  const isFirst = page <= 0;
  const isLast = page >= totalPages - 1;

  // range of pages
  const start = Math.max(1, page - windowSize);
  const end = Math.min(totalPages - 2, page + windowSize);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center  mb-4 sm:mb-[60px]">
      <ul className="flex text-[14px] sm:text-[18px] gap-[26px] items-center">
        {!isFirst && (
          <li>
            <button
              type="button"
              className="p-[10px]"
              onClick={() => onChange(page - 1)}
              aria-label="Previous page"
            >
              <PaginationArrowSVG className="rotate-180" />
            </button>
          </li>
        )}

        <li>
          <button
            type="button"
            className={`p-[10px] ${page === 0 ? "font-bold " : ""}`}
            onClick={() => onChange(0)}
            disabled={disabled}
          >
            1
          </button>
        </li>

        {start > 1 && <li className="px-2 select-none">…</li>}

        {pages.map((p) => (
          <li key={p}>
            <button
              type="button"
              className={`p-[10px] ${page === p ? "font-bold " : ""}`}
              onClick={() => onChange(p)}
              disabled={disabled}
            >
              {p + 1}
            </button>
          </li>
        ))}

        {end < totalPages - 2 && <li className="px-2 select-none">…</li>}

        {totalPages > 1 && (
          <li>
            <button
              type="button"
              className={`p-[10px] ${
                page === totalPages - 1 ? "font-bold " : ""
              }`}
              onClick={() => onChange(totalPages - 1)}
              disabled={disabled}
            >
              {totalPages}
            </button>
          </li>
        )}
        {!isLast && (
          <li>
            <button
              type="button"
              className="p-[10px]"
              onClick={() => onChange(page + 1)}
              aria-label="Next page"
            >
              <PaginationArrowSVG />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
