interface PropertyAdditionalSingleCellProps {
    value?: number | string
    label: string
    info?: string
    isLastChild?: boolean
}

export default function PropertyAdditionalSingleCell({ value, label, info, isLastChild }: PropertyAdditionalSingleCellProps) {
    return (
        <div className={`space-y-2 ${isLastChild && "last:md:pl-4 last:lg:pl-8 last:md:border-l last:md:border-border"}`}>
            <p className="text-white/60 text-sm md:text-base capitalize">
                {label}
            </p>
            <div className="flex items-center gap-4">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold capitalize">
                    {typeof value === "number"
                        ?
                        Number(value).toLocaleString("en-NG", {
                            style: "currency", currency: "NGN", minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })
                        :
                        value}
                </p>
                {info &&
                    <div className="border border-border rounded-md lg:rounded-full px-2 py-1 md:p-3 md:py-1 bg-background-grey">
                        <p className="text-white/60 font-medium text-sm">
                            {info}
                        </p>
                    </div>}
            </div>
        </div>
    )
}
