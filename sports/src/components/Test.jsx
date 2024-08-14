<div className="w-full bg-slate-200 py-12">
    {knockoutMatch[11]?.goals_scored1 != -1 ? (
        knockoutMatch.map((data, index) => {
            if (index >= 12 && index <= 13) {
                return (
                    <ScoreKnockoutCard
                        key={data._id}
                        data={data}
                    ></ScoreKnockoutCard>
                );
            }
        })
    ) : (
        <h2
            style={{ marginLeft: "350px" }}
            className="font-bold py-5 mt-24 text-red-500 text-3xl"
        >
            {" "}
            Semi-final is not started yet.
        </h2>
    )}
</div>;
